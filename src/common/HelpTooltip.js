import { Tooltip, Icon } from "@mui/material";

/**
 *
 * @param {import('@mui/material').TooltipProps} props
 */
function HelpTooltip(props) {
  return (
    <Tooltip {...props}>
      <Icon style={{ fontSize: 14 }}>help</Icon>
    </Tooltip>
  );
}

export default HelpTooltip;
