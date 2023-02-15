import { getNestedValue } from "../../utils/form-generator-utils";
import { TextField } from "@mui/material";
import React from "react";
export default function NumberFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const value = getNestedValue(accessor, values);
    return <TextField disabled={disable} error={nestedTouched && nestedError !== undefined} fullWidth label={Header} name={accessor} onChange={(e) => setFieldValue(e.target.value)} placeholder={Header} type="number" value={value} variant={"outlined"} helperText={nestedError}/>;
}
