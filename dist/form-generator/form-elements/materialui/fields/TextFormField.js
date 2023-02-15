import { jsx as _jsx } from "react/jsx-runtime";
import { getNestedValue } from "../../utils/form-generator-utils";
import { TextField } from "@mui/material";
export default function TextFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const value = getNestedValue(accessor, values);
    return _jsx(TextField, { disabled: disable, error: nestedTouched && nestedError !== undefined, fullWidth: true, label: Header, name: accessor, onChange: (e) => setFieldValue(e.target.value), placeholder: Header, type: "text", value: value, variant: "outlined", helperText: nestedError });
}
