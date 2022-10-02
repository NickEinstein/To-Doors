import { DialogTitle, IconButton, Icon } from "@mui/material";
import clsx from "clsx";

/**
 *
 * @param {DialogTitleXCloseButtonProps} props
 */
function DialogTitleXCloseButton(props) {
  const { children, onClose, className, ...other } = props;

  return (
    <DialogTitle className={clsx("", className)} {...other}>
      {children}
      {onClose ? (
        <IconButton
          className="absolute right-2 top-3"
          aria-label="close"
          onClick={onClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default DialogTitleXCloseButton;

/**
 * @typedef {{onClose: Function} & DialogTitleXCloseButtonProps} DialogTitleXCloseButtonProps
 */
