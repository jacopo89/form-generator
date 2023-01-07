import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface PriceElementInterface extends BasicFormElementInterface{
    type:"price"
}

export default function PriceFormField(props:PriceElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const nestedValue= getNestedValue(accessor,values)

    const onChange = (e:any) => setFieldValue((parseFloat(e.target.value))*100)
    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control type="number" name={accessor} placeholder={Header} value={nestedValue/100} onChange={onChange} />
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>
}
