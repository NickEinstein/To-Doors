import { useCallback, useReducer } from "react";
import { nanoid } from "@reduxjs/toolkit";

/**
 *
 * @param {AsyncUIState} state
 * @returns {AsyncUIState}
 */
function reducer(state, { type, payload }) {
  switch (type) {
    case "OPEN": {
      return { ...state, ...payload };
    }
    case "CLOSE": {
      return { key: state.key };
    }
    case "CONTEXT": {
      if (state.ui) {
        state.ui.context = payload;
      }
      return { ...state, context: payload };
    }
    default:
      return state;
  }
}

export function useAsyncUI(key = nanoid()) {
  const [{ ui, context }, dispatch] = useReducer(
    reducer,
    /** @type {AsyncUIState} */ ({ key })
  );

  function setContext(ctx) {
    ui?.setContext(ctx);
  }

  function render(render) {
    if (ui) {
      return render?.(ui);
    }
    return null;
  }

  function close(value, reject = false) {
    ui?.close(value, reject);
  }

  function resolve(value) {
    ui?.resolve(value);
  }

  function reject(value) {
    ui?.reject(value);
  }

  const open = useCallback((options = {}) => {
    const { context } = options;
    const ui = new AsyncUI();
    ui.initialize({ dispatch, context });
    dispatch({ type: "OPEN", payload: { ui, context } });
    return ui;
  }, []);

  return { render, open, close, resolve, reject, ui, context, setContext };
}

export default useAsyncUI;

/**
 * @extends Promise<any>
 */
export class AsyncUI extends Promise {
  constructor(cb) {
    let baseResolve, baseReject;
    super((resolve, reject) => {
      baseResolve = resolve;
      baseReject = reject;
      cb?.(resolve, reject);
    });
    this.baseResolve = baseResolve;
    this.baseReject = baseReject;
  }

  initialize(options = {}) {
    const { dispatch, context } = options;
    this.context = context;
    this.setContext = (ctx) => {
      this.context = ctx;
      dispatch({ type: "CONTEXT", payload: ctx });
    };

    this.close = (value, reject = false) => {
      if (reject) {
        this.baseReject(value);
      } else {
        this.baseResolve(value);
      }
      dispatch({ type: "CLOSE" });
    };
    this.resolve = (value) => this.close(value, false);
    this.reject = (value) => this.close(value, true);
  }

  get [Symbol.toStringTag]() {
    return "AsyncUI";
  }
}

/**
 * @typedef {{
 * key: any;
 * ui: AsyncUI;
 * context: any
 * }} AsyncUIState
 */
