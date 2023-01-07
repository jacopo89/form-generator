import {Form} from "react-bootstrap";
import React, {useEffect} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface TextElementInterface extends BasicFormElementInterface{
    type:"text"
}

export default function TextFormField(props:TextElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <Form.Group>
        <Form.Label>{Header}</Form.Label>
        <Form.Control isValid={nestedTouched && nestedError===undefined} disabled={disable} type="text" name={accessor} placeholder={Header} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(e.target.value)} />
        <Form.Control.Feedback
            className="font-weight-bold"
            type="invalid"
            role="alert"
            aria-label="from feedback"
            tooltip
        >
            {nestedError}
        </Form.Control.Feedback>
    </Form.Group>
}
