import { Tooltip, Icon } from "@mui/material";
import clsx from "clsx";

/**
 *
 * @param {{label: string} & import('@mui/material').TooltipProps} props
 */
function HelpTooltipLabel(props) {
  const { label, className } = props;
  return (
    <span className="inline-flex items-center">
      {label}
      <Tooltip
        {...props}
        className={clsx("ml-1 pointer-events-auto", className)}
      >
        <Icon style={{ fontSize: 14 }} className="text-primary-main">
          help
        </Icon>
      </Tooltip>
    </span>
  );
}

export default HelpTooltipLabel;
