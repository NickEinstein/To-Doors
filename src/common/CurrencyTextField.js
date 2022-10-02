import { forwardRef } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { CurrencyEnum } from "constants/NumberConstants";
import { formatNumber } from "utils/NumberUtils";

export const CurrencyTextField = forwardRef(
  /**
   *
   * @param {{code: keyof typeof CurrencyEnum} & import("@mui/material").TextFieldProps} props
   */
  (props, ref) => {
    const { InputProps, code, value, onChange, onBlur, ...rest } = props;
    const currency = CurrencyEnum[code || "NG"];

    return (
      <TextField
        ref={ref}
        value={value}
        onChange={(e) => {
          format(e.target);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          format(e.target, true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{currency.symbol}</InputAdornment>
          ),
          ...InputProps,
        }}
        {...rest}
      />
    );
  }
);

CurrencyTextField.defaultProps = {
  code: "NGN",
};

export default CurrencyTextField;

/**
 *
 * @param {HTMLInputElement} input
 * @param {boolean} blur
 */
function format(input, blur) {
  let value = input.value;
  // console.log(value);
  if (value === "") {
    return "";
  }
  const previousLength = value.length;
  let caretPosition = input.selectionStart;

  const decimalPosition = value.indexOf(".");
  if (decimalPosition >= 0) {
    let leftSide = formatNumber(value.substring(0, decimalPosition));
    let rightSide = formatNumber(value.substring(decimalPosition));

    if (blur) {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    value = leftSide + "." + rightSide;
  } else {
    value = formatNumber(value);
    if (blur) {
      value += "00";
    }
  }
  input.value = value;
  const currentLength = value.length;
  caretPosition = currentLength - previousLength + caretPosition;
  input.setSelectionRange(caretPosition, caretPosition);

  return value;
}
