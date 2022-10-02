import React from "react";
import { IconButton, InputAdornment, TextField, Icon } from "@mui/material";
import clsx from "clsx";

/** @param {import("@mui/material").TextFieldProps} props */
function PasswordTextField(props) {
  const { error, ...rest } = props;
  const [isVisible, setVisible] = React.useState(false);
  const handleVisible = React.useCallback(() => setVisible((p) => !p), []);

  return (
    <TextField
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleVisible}
              disabled={props.disabled}
            >
              <Icon className={clsx(error ? "text-danger" : "text-primary")}>
                {isVisible ? "visibility_off" : "visibility"}
              </Icon>
            </IconButton>
          </InputAdornment>
        ),
      }}
      error={error}
      {...rest}
    />
  );
}

export default PasswordTextField;
