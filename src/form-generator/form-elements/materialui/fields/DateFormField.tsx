import React from "react";
import {normalizeDate, serializeDate} from "../../utils/TimeManager";
import {getNestedValue} from "../../utils/form-generator-utils";
import {DateElementInterface} from "../../interfaces/DateElementInterface";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import {LocalizationProvider} from '@mui/x-date-pickers';

export default function DateFormField(props:DateElementInterface){
    const {values,setFieldValue,accessor,Header,label} = props
    const handleData = (value:any) => {
        console.log(value)
        setFieldValue( serializeDate(value))
    }
    const value = getNestedValue(accessor,values);
    return <LocalizationProvider dateAdapter={AdapterMoment}>
        {label !== false && <span>{label ?? Header}</span>}
        <DatePicker
            className="w-100"
            format="DD/MM/YYYY"
            value={value ? normalizeDate(value) : moment()}
            onChange={handleData}
         />
    </LocalizationProvider>
}
