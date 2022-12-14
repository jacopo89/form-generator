import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../utils/form-generator-utils";
export default function RadioFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, options } = props;
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return _jsxs(_Fragment, { children: [_jsx(Form.Label, { children: Header }), _jsx("div", { children: options.map(option => _jsx(Form.Check, { disabled: disable, name: accessor, type: "radio", value: option.value, label: option.label, id: option.value, inline: true, onChange: onChangeRadio, checked: getNestedValue(accessor, values) === option.value })) })] });
}
