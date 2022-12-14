import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
export default function NumberFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    return _jsx("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: _jsx(Form.Control, { type: "number", name: accessor, placeholder: Header, value: values[accessor], onChange: (e) => setFieldValue(parseInt(e.target.value)) }) }));
}
