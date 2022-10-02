import { useCallback, useReducer } from "react";
import useDataRef from "./useDataRef";

/**
 *
 * @param {State} state
 * @returns {State}
 */
function reducer(state, { type, payload }) {
  switch (type) {
    case "NEXT_STEP": {
      const step = parseInt(payload) ? parseInt(payload) : state.step + 1;
      return { ...state, step, history: [...state.history, step] };
    }
    case "PREV_STEP": {
      const history = [...state.history];
      history.pop();
      const step = history[history.length - 1];
      return { ...state, step, history };
    }
    case "RESET": {
      const step = parseInt(payload.step)
        ? parseInt(payload.step)
        : payload.initialStep;
      return { ...state, step, history: [step] };
    }
    default:
      return state;
  }
}

function useStep(initialStep = 0) {
  const [{ step, history }, dispatch] = useReducer(reducer, {
    step: initialStep,
    history: [initialStep],
  });

  const dataRef = useDataRef({ initialStep });

  const nextStep = useCallback(
    (step) => dispatch({ type: "NEXT_STEP", payload: step }),
    []
  );

  const prevStep = useCallback(
    (step) => dispatch({ type: "PREV_STEP", payload: step }),
    []
  );

  const reset = useCallback(
    (step) => {
      dispatch({
        type: "RESET",
        payload: { step, initialStep: dataRef.current.initialStep },
      });
    },
    [dataRef]
  );

  return {
    history,
    step,
    nextStep,
    prevStep,
    reset,
  };
}

export default useStep;

/**
 * @typedef {{
 * step: number;
 * history: number[]
 * }} State
 */
