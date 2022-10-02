/**
 * 
 * @param {*} formik 
 * @param {*} key 
 * @returns 
 */
export function getTextFieldFormikProps(formik, key) {
  return {
    ...formik.getFieldProps(key),
    error: !!formik.touched?.[key] && !!formik.errors?.[key],
    helperText: !!formik.touched?.[key] && formik.errors?.[key],
    focused: formik.values?.[key],
  };
}

export function getCheckFieldFormikProps(
  formik,
  key,
  checkedValue = true
  // unCheckedValue = false
) {
  const textFieldProps = getTextFieldFormikProps(formik, key);
  // if (key === "allowAttributeConfiguration") {
  //   console.log(textFieldProps.value);
  // }
  const value =
    typeof checkedValue === "boolean"
      ? !!textFieldProps.value
      : textFieldProps.value;
  return {
    ...textFieldProps,
    value: value,
    checked: value === checkedValue,
  };
  // return {
  //   checked: !!formik.values[key],
  //   onChange: (e) => formik.setFieldValue(key, e.target.checked),
  // };
}
