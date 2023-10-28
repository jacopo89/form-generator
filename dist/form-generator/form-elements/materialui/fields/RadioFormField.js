import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
export default function RadioFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, options } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const nestedValue = getNestedValue(accessor, values);
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { children: Header }, void 0), _jsx(RadioGroup, Object.assign({ name: "accessor", row: true, value: nestedValue, onChange: onChangeRadio }, { children: options.map(option => _jsx(FormControlLabel, { disabled: disable, value: option.value, control: _jsx(Radio, {}, void 0), label: option.label }, option.value)) }), void 0)] }, void 0));
}
