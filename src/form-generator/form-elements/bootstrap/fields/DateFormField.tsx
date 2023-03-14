import React from "react";
// @ts-ignore
import DatePicker from "react-datepicker";
import {normalizeDate, serializeDate} from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import {getNestedValue} from "../../utils/form-generator-utils";
import {Form} from "react-bootstrap";
import {DateElementInterface} from "../../interfaces/DateElementInterface";

export default function DateFormField(props:DateElementInterface){
    const {type,values,disable, errors, touched,setFieldValue,accessor,Header} = props
    const handleData = (value:any) => {
        setFieldValue( serializeDate(value))
    }
    const value = getNestedValue(accessor,values);
    return <div>
        <Form.Label>{Header}</Form.Label>
        <DatePicker disabled={disable} placeholderText={Header} className="form-control" selected={value ? normalizeDate(value): new Date()} onChange={handleData} dateFormat={"dd/MM/yyyy"}/>
    </div>
}
