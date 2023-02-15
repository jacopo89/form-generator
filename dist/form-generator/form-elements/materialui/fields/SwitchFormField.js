import { jsx as _jsx } from "react/jsx-runtime";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function SwitchFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChange = (event) => setFieldValue(!getNestedValue(accessor, values));
    return (_jsx(FormGroup, { children: _jsx(FormControlLabel, { control: _jsx(Switch, { onChange: onChange, checked: getNestedValue(accessor, values) }), label: Header }) }));
}
