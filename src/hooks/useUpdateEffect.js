import { useEffect, useRef } from "react";
import useDataRef from "./useDataRef";

function useUpdateEffect(cb, dependencies = []) {
  const isMountedRef = useRef(false);
  const dataRef = useDataRef({ cb });

  useEffect(() => {
    if (isMountedRef.current) {
      return dataRef.current.cb?.();
    }
    isMountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataRef, ...dependencies]);
}

export default useUpdateEffect;
