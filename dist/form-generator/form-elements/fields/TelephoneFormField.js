import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../utils/form-generator-utils";
import NumberFormat from "react-number-format";
export default function TelephoneFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    // @ts-ignore
    const numberFormField = _jsx(NumberFormat, { name: accessor, value: getNestedValue(accessor, values), onValueChange: (e) => setFieldValue(e.value), format: "+## ##########", mask: "_", className: "form-control", allowEmptyFormatting: true });
    return _jsxs("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: [_jsx(Form.Label, { children: Header }), numberFormField, nestedTouched && _jsx("div", Object.assign({ className: "d-block" }, { children: errorMessage }))] }));
}
