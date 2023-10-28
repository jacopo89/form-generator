import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getNestedValue } from "../../utils/form-generator-utils";
import { TextField } from "@mui/material";
export default function NumberFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header, placeholder, label } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const value = getNestedValue(accessor, values);
    return _jsxs(_Fragment, { children: [label !== false && _jsx("span", { children: label !== null && label !== void 0 ? label : Header }, void 0), _jsx(TextField, { disabled: disable, placeholder: placeholder, error: nestedTouched && nestedError !== undefined, fullWidth: true, name: accessor, onChange: (e) => setFieldValue(e.target.value), type: "number", value: value, variant: "outlined", helperText: nestedError }, void 0)] }, void 0);
}
