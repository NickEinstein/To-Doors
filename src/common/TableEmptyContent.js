import { Typography, Icon } from "@mui/material";
import clsx from "clsx";
import "./TableEmptyContent.css";

export function TableEmptyContent(props) {
  const { title, className, ...rest } = props;
  return (
    <div className={clsx("TableEmptyContent", className)} {...rest}>
      <Icon className={clsx("TableEmptyContent__icon")}>insert_drive_file</Icon>
      <Typography variant="h6" className={clsx("TableEmptyContent__text")}>
        No data
      </Typography>
    </div>
  );
}

export default TableEmptyContent;
