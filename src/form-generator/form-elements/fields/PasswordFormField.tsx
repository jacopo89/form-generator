import {Form} from "react-bootstrap";
import React, {useEffect} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface PasswordElementInterface extends BasicFormElementInterface{
    type:"password"
}

export default function PasswordFormField(props:PasswordElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control disabled={disable} type="password" name={accessor} placeholder={Header} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(e.target.value)} />
        {nestedTouched && <div className="d-block">{errorMessage}</div>}
    </div>
}
