import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function TextFormField(props) {
    const { disable, values, errors, touched, setFieldValue, accessor, Header, placeholder, label } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs(Form.Group, Object.assign({ as: "div", style: { position: "relative" } }, { children: [label !== false && _jsx(Form.Label, { children: label !== null && label !== void 0 ? label : Header }), _jsx(Form.Control, { isInvalid: nestedTouched && nestedError !== undefined, disabled: disable, type: "text", name: accessor, placeholder: placeholder, value: getNestedValue(accessor, values), onChange: (e) => {
                    setFieldValue(e.target.value);
                } }), _jsx(Form.Control.Feedback, Object.assign({ className: "font-weight-bold", type: "invalid", role: "alert", "aria-label": "from feedback", tooltip: true }, { children: nestedError }))] }));
}
