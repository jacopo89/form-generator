import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../utils/form-generator-utils";
import { PatternFormat } from 'react-number-format';
import { FormGroup } from "../utils/FormGroup";
export default function TelephoneFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs(FormGroup, { children: [_jsx(Form.Label, { children: Header }), _jsx(PatternFormat, { name: accessor, valueIsNumericString: true, value: getNestedValue(accessor, values), onValueChange: (e) => setFieldValue(e.value), format: "+## ##########", mask: "_", className: "form-control", allowEmptyFormatting: true }), nestedTouched && _jsx("div", Object.assign({ className: "d-block" }, { children: errorMessage }))] });
}
