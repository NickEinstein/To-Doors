import { useEffect } from "react";

function useMountEffect(cb) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(cb, []);
}

export default useMountEffect;
