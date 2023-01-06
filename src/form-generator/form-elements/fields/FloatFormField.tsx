import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface FloatElementInterface extends BasicFormElementInterface{
    type:"float"
}

export default function FloatFormField(props:FloatElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control type="number" name={accessor} placeholder={Header} value={values[accessor]} onChange={(e)=>setFieldValue(parseFloat(e.target.value))} />
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>
}
