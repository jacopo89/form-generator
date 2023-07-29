import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormGroup } from "../../utils/FormGroup";
export default function NumberFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs(FormGroup, { children: [_jsx(Form.Label, { children: Header }), _jsx(Form.Control, { isInvalid: nestedTouched && nestedError !== undefined, type: "number", name: accessor, placeholder: Header, value: getNestedValue(accessor, values), onChange: (e) => setFieldValue(parseInt(e.target.value)) }), _jsx(Form.Control.Feedback, Object.assign({ className: "font-weight-bold", type: "invalid", role: "alert", "aria-label": "from feedback", tooltip: true }, { children: nestedError }))] });
}
