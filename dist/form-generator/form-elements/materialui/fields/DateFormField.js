import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import { getNestedValue } from "../../utils/form-generator-utils";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
export default function DateFormField(props) {
    const { values, setFieldValue, accessor, Header, label } = props;
    const handleData = (value) => {
        console.log(value);
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    return _jsxs(_Fragment, { children: [label !== false && _jsx("span", { children: label !== null && label !== void 0 ? label : Header }), _jsx(DatePicker, { className: "w-100", format: "DD/MM/YYYY", value: value ? normalizeDate(value) : moment(), onChange: handleData })] });
}
