import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getNestedValue } from "../../utils/form-generator-utils";
import { TextField } from "@mui/material";
export default function NumberFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const value = getNestedValue(accessor, values);
    return _jsxs(_Fragment, { children: [_jsx("span", { children: Header }), _jsx(TextField, { disabled: disable, error: nestedTouched && nestedError !== undefined, fullWidth: true, label: Header, name: accessor, onChange: (e) => setFieldValue(e.target.value), type: "number", value: value, variant: "outlined", helperText: nestedError })] });
}
