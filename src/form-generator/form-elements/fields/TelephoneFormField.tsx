import {Form} from "react-bootstrap";
import React, {useEffect} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";
import { PatternFormat } from 'react-number-format';


export interface TelephoneFormFieldInterface extends BasicFormElementInterface{
    type:"tel"
}

export default function TelephoneFormField(props:TelephoneFormFieldInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)



    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <PatternFormat name={accessor} value={getNestedValue(accessor,values)} onValueChange={(e)=>setFieldValue(e.value)}  format="+## ##########" mask="_" className="form-control" allowEmptyFormatting />
        {nestedTouched && <div className="d-block">{errorMessage}</div>}
    </div>
}
