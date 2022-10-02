import { Button, Typography, Icon } from "@mui/material";
import clsx from "clsx";
// import ErrorContentImg from "assets/images/ErrorContent.png";
import "./ErrorContent.css";
import useLogout from "hooks/useLogout";

/**
 *
 * @param {ErrorContentProps} props
 */
function ErrorContent(props) {
  const { title, description, className, onTryAgain, ...rest } = props;

  const { logout } = useLogout();

  return (
    <div className={clsx("ErrorContent", className)} {...rest}>
      <Typography variant="h6" className="font-bold text-center">
        {title}
      </Typography>
      <div>
        <Icon fontSize="100px" className={clsx("ErrorContent__icon")}>
          sentiment_dissatisfied
        </Icon>
        {/* <img src={ErrorContentImg} alt="ErrorContent" width={100} /> */}
      </div>
      <Typography
        variant="body2"
        // color="secondary"
        className="text-center mb-4 font-bold"
      >
        {description}
      </Typography>
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outlined" onClick={() => logout()}>
          Send Report
        </Button>
        <Button onClick={onTryAgain}>Try Again</Button>
      </div>
    </div>
  );
}

ErrorContent.defaultProps = {
  title: "Something went wrong",
  description: "We're quite sorry about this!",
  elevation: 0,
};

export default ErrorContent;

/**
 * @typedef {{
 * onTryAgain: Function
 * } & import("@mui/material").PaperProps} ErrorContentProps
 */
