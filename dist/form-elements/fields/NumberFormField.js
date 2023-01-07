import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../utils/form-generator-utils";
export default function NumberFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: [_jsx(Form.Label, { children: Header }), _jsx(Form.Control, { type: "number", name: accessor, placeholder: Header, value: values[accessor], onChange: (e) => setFieldValue(parseInt(e.target.value)) })] }));
}
