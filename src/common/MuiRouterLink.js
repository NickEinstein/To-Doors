import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 *
 * @param {MuiRouterLinkProps} props
 * @returns
 */
function MuiRouterLink(props) {
  return <MuiLink {...props} />;
}

MuiRouterLink.defaultProps = {
  component: RouterLink,
};

export default MuiRouterLink;

/**
 * @typedef {{} & import("react-router-dom").LinkProps & import("@mui/material").LinkProps} MuiRouterLinkProps
 */
