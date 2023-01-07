import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface NumberElementInterface extends BasicFormElementInterface{
    type:"number"
}

export default function NumberFormField(props:NumberElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)


    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control type="number" name={accessor} placeholder={Header} value={values[accessor]} onChange={(e)=>setFieldValue(parseInt(e.target.value))} />
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>
}
