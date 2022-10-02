import { useEffect } from "react";
import { IconButton, Icon } from "@mui/material";
import useDataRef from "hooks/useDataRef";
import LoadingIndicator from "./LoadingIndicator";
import ErrorContent from "common/ErrorContent";
import clsx from "clsx";
import "./LoadingContent.css";

/**
 *
 * @param {LoadingContentProps} props
 */
function LoadingContent(props) {
  const {
    size,
    error,
    loading,
    children,
    onReload,
    onMount,
    loadingContent,
    errorContent,
    className,
    ...rest
  } = props;

  const dataRef = useDataRef({ onReload, onMount });

  useEffect(() => {
    dataRef.current.onMount?.();
  }, [dataRef]);

  if (!loading && !error) {
    return typeof children === "function" ? children() : children;
  }

  const defaultLoadingContent = <LoadingIndicator size={size} />;
  // const defaultErrorContent = (
  //   <IconButton onClick={() => onReload?.()} variant="secondary">
  //     <Icon classes={{ root: "LoadingContent__reloadIcon" }}>restart_alt</Icon>
  //   </IconButton>
  // );
  const defaultErrorContent = <ErrorContent onTryAgain={() => onReload?.()} />;

  return (
    <div className={clsx("LoadingContent", className)} {...rest}>
      {error ? (
        <>
          {errorContent
            ? typeof errorContent === "function"
              ? errorContent(defaultErrorContent)
              : errorContent
            : defaultErrorContent}
        </>
      ) : loadingContent ? (
        typeof loadingContent === "function" ? (
          loadingContent(defaultLoadingContent)
        ) : (
          loadingContent
        )
      ) : (
        defaultLoadingContent
      )}
    </div>
  );
}

LoadingContent.defaultProps = {
  size: 40,
  children: null,
};

export default LoadingContent;

/**
 * @typedef {{
 * size: string | number,
 * onMount: Function,
 * onReload: Function,
 * error: boolean,
 * loading: boolean,
 * errorContent: React.ReactNode,
 * loadingContent: React.ReactNode,
 * } & React.ComponentPropsWithoutRef<'div'>} LoadingContentProps
 */
