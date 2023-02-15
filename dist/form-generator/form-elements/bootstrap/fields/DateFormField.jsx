import React from "react";
// @ts-ignore
import DatePicker from "react-datepicker";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import { getNestedValue } from "../../utils/form-generator-utils";
import { Form } from "react-bootstrap";
export default function DateFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header } = props;
    const handleData = (value) => {
        /*console.log("value",value)
        console.log("serialized date", serializeDate(value))*/
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <DatePicker disabled={disable} placeholderText={Header} className="form-control" selected={value ? normalizeDate(value) : new Date()} onChange={handleData} dateFormat={"dd/MM/yyyy"}/>
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>;
}
