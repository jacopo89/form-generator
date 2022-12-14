import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { getNestedValue } from "../utils/form-generator-utils";
export default function TextFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    useEffect(() => {
        console.log("accessor disable", accessor, disable);
    }, []);
    useEffect(() => {
        /* console.log("values", values)
         console.log("accessor", accessor)
         console.log("nested", getNestedValue(accessor, values))*/
    }, [values, accessor]);
    return _jsxs("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: [_jsx(Form.Label, { children: Header }), _jsx(Form.Control, { disabled: disable, type: "text", name: accessor, placeholder: Header, value: getNestedValue(accessor, values), onChange: (e) => setFieldValue(e.target.value) }), nestedTouched && _jsx("div", Object.assign({ className: "d-block" }, { children: errorMessage }))] }));
}