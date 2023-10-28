import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import { getNestedValue } from "../../utils/form-generator-utils";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
export default function DateFormField(props) {
    const { values, setFieldValue, accessor, Header, label } = props;
    const handleData = (value) => {
        console.log(value);
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    return _jsxs(LocalizationProvider, Object.assign({ dateAdapter: AdapterMoment }, { children: [label !== false && _jsx("span", { children: label !== null && label !== void 0 ? label : Header }, void 0), _jsx(DatePicker, { className: "w-100", format: "DD/MM/YYYY", value: value ? normalizeDate(value) : moment(), onChange: handleData }, void 0)] }), void 0);
}
