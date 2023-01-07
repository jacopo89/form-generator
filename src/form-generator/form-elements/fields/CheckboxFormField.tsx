import React from "react";
import { Form } from "react-bootstrap";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";
import {FormGroup} from "../utils/FormGroup";

export interface CheckboxFormElementInterface extends BasicFormElementInterface{
    type:"checkbox"
}

export default function CheckboxFormField(props:CheckboxFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChange = ()=> setFieldValue(!getNestedValue(accessor,values))
    return <FormGroup>
        <Form.Check name={accessor} type="checkbox" label={Header} id={accessor} onChange={onChange} checked={getNestedValue(accessor,values)}
                    isInvalid={nestedTouched && nestedError!==undefined}
                    feedback={nestedError}
                    feedbackType="invalid"
                    feedbackTooltip
        />
    </FormGroup>
}
