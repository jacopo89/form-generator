import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import DatePicker from "react-datepicker";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormControlLabel, FormGroup } from "@mui/material";
export default function DateFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header } = props;
    const handleData = (value) => {
        /*console.log("value",value)
        console.log("serialized date", serializeDate(value))*/
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    return _jsx(FormGroup, Object.assign({ className: "filled form-group tooltip-end-top" }, { children: _jsx(FormControlLabel, { control: _jsx(DatePicker, { disabled: disable, placeholderText: Header, className: "form-control", selected: value ? normalizeDate(value) : new Date(), onChange: handleData, dateFormat: "dd/MM/yyyy" }), label: Header }) }));
}
