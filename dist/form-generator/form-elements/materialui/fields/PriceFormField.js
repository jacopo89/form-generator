import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getNestedValue } from "../../utils/form-generator-utils";
import { TextField } from "@mui/material";
export default function PriceFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header, disable } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const value = getNestedValue(accessor, values);
    const onChange = (e) => setFieldValue((parseFloat(e.target.value)) * 100);
    return _jsxs(_Fragment, { children: [_jsx("span", { children: Header }), _jsx(TextField, { disabled: disable, error: nestedTouched && nestedError !== undefined, fullWidth: true, name: accessor, onChange: onChange, type: "float", value: value / 100, variant: "outlined", helperText: nestedError })] });
}
