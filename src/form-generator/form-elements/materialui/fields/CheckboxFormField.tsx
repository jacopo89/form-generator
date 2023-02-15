import React, { useState } from "react";
import {Checkbox} from "@mui/material";
import {CheckboxElementInterface} from "../../interfaces/CheckboxElementInterface";
import {getNestedValue} from "../../utils/form-generator-utils";

export default function CheckboxFormField(props:CheckboxElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=> setFieldValue(!getNestedValue(accessor,values))

    return (
        <Checkbox
            name={accessor}
            checked={getNestedValue(accessor,values)}
            onChange={onChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    )
}
