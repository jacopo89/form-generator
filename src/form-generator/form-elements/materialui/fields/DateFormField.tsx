import React from "react";
// @ts-ignore
import DatePicker from "react-datepicker";
import {normalizeDate, serializeDate} from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import {getNestedValue} from "../../utils/form-generator-utils";
import {DateElementInterface} from "../../interfaces/DateElementInterface";
import {FormControlLabel, FormGroup} from "@mui/material";

export default function DateFormField(props:DateElementInterface){
    const {type,values,disable, errors, touched,setFieldValue,accessor,Header} = props
    const handleData = (value:any) => {
        /*console.log("value",value)
        console.log("serialized date", serializeDate(value))*/
        setFieldValue( serializeDate(value))
    }
    const value = getNestedValue(accessor,values);
    return <FormGroup className="filled form-group tooltip-end-top">
        <FormControlLabel control={<DatePicker disabled={disable} placeholderText={Header} className="form-control"
                                       selected={value ? normalizeDate(value) : new Date()} onChange={handleData}
                                       dateFormat={"dd/MM/yyyy"}/>} label={Header}/>
    </FormGroup>
}
