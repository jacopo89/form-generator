import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-ignore
import DatePicker from "react-datepicker";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import { getNestedValue } from "../../utils/form-generator-utils";
import { Form } from "react-bootstrap";
export default function DateFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header } = props;
    const handleData = (value) => {
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    return _jsxs("div", { children: [_jsx(Form.Label, { children: Header }), _jsx(DatePicker, { disabled: disable, placeholderText: Header, className: "form-control", selected: value ? normalizeDate(value) : new Date(), onChange: handleData, dateFormat: "dd/MM/yyyy" })] });
}
