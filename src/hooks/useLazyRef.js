import { useRef } from "react";

/**
 * @template A,R
 * @param {(...args: A[]) => R} func
 * @param  {...A} args
 * @returns {React.MutableRefObject<R>}
 */
export function useLazyRef(func, ...args) {
  const ref = useRef(/** @type {R} */ (null));
  if (!ref.current && func) {
    ref.current = func(...args);
  }
  return ref;
}

export default useLazyRef;
