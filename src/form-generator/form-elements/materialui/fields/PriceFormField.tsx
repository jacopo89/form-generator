import {NumberElementInterface} from "../../interfaces/NumberElementInterface";
import {getNestedValue} from "../../utils/form-generator-utils";
import {TextField} from "@mui/material";
import React from "react";

export default function NumberFormField(props:NumberElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header,disable} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const value = getNestedValue(accessor,values)

    const onChange = (e:any) => setFieldValue((parseFloat(e.target.value))*100)
    return <>
        <span>{Header}</span>
        <TextField
            disabled={disable}
            error={nestedTouched && nestedError!==undefined}
            fullWidth
            label={Header}
            name={accessor}
            onChange={onChange}
            type="float"
            value={value/100}
            variant={"outlined"}
            helperText={nestedError}
        />
    </>
}
