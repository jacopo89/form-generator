import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getNestedValue } from "../../../form-elements/utils/form-generator-utils";
import { TextField } from "@mui/material";
export default function TextFilterField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header, disable } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const nestedValue = getNestedValue(accessor, values);
    return _jsxs(_Fragment, { children: [_jsx("span", { children: Header }, void 0), _jsx(TextField, { disabled: disable, fullWidth: true, label: Header, name: accessor, onChange: (e) => setFieldValue(e.target.value), type: "text", value: nestedValue, variant: "outlined" }, void 0)] }, void 0);
}
