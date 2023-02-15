import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "@mui/material";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function CheckboxFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChange = (event) => setFieldValue(!getNestedValue(accessor, values));
    return (_jsx(Checkbox, { name: accessor, checked: getNestedValue(accessor, values), onChange: onChange, inputProps: { 'aria-label': 'controlled' } }));
}
