import { useRef } from "react";

/**
 * @template T
 * @param {T} data
 */
function useDataRef(data) {
  const ref = useRef(data);
  ref.current = data;
  return ref;
}

export default useDataRef;
