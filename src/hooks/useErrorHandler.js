import { useState } from "react";

export function useErrorHandler(givenError) {
  const [error, setError] = useState(null);
  if (givenError) throw givenError;
  if (error) throw error;
  return setError;
}

export default useErrorHandler;
