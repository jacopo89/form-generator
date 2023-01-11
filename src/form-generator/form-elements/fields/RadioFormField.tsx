import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";
import {FormGroup} from "../utils/FormGroup";

export interface Option{
    label:string,
    value:string|undefined,
}

export interface RadioFormElementInterface extends BasicFormElementInterface{
    type:"radio",
    options:Option[]
}

export default function RadioFormField(props:RadioFormElementInterface){
    const {type,values, disable, errors, touched,setFieldValue,accessor,Header, options} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChangeRadio = (e:any) => {
        setFieldValue(e.target.value)
    }
    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <div>
            {options.map(option =><Form.Check disabled={disable} name={accessor} type="radio" value={option.value} label={option.label} id={option.value} inline onChange={onChangeRadio} checked={getNestedValue(accessor,values)=== option.value} />)}
        </div>

    </FormGroup>
}
