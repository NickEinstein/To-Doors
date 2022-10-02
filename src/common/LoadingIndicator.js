import { forwardRef } from "react";
import { CircularProgress } from "@mui/material";

const LoadingIndicator = forwardRef(
  /**
   *
   * @param {import("@mui/material").CircularProgressProps} props
   */
  function LoadingIndicator(props, ref) {
    return <CircularProgress ref={ref} {...props} />;
  }
);

export default LoadingIndicator;
