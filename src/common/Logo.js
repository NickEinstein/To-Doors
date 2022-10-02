import { ReactComponent as PayBoxISvg } from "assets/svgs/logo.svg";
import "./Logo.css";

/**
 *
 * @param {import("react").ComponentPropsWithoutRef<typeof PayBoxISvg>} props
 */
function Logo(props) {
  return <PayBoxISvg {...props} />;
}

export default Logo;
