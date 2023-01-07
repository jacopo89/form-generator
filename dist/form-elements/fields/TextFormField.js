import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../utils/form-generator-utils";
export default function TextFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs(Form.Group, { children: [_jsx(Form.Label, { children: Header }), _jsx(Form.Control, { isValid: nestedTouched && !nestedError, disabled: disable, type: "text", name: accessor, placeholder: Header, value: getNestedValue(accessor, values), onChange: (e) => setFieldValue(e.target.value) }), _jsx(Form.Control.Feedback, Object.assign({ className: "font-weight-bold", type: "invalid", role: "alert", "aria-label": "from feedback" }, { children: nestedError }))] });
}
