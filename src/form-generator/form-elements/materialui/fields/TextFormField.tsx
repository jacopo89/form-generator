import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {TextElementInterface} from "../../interfaces/TextElementInterface";
import {TextField} from "@mui/material";

export default function TextFormField(props:TextElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const value = getNestedValue(accessor,values)

    return <>
        <span>{Header}</span>
        <TextField
        disabled={disable}
        error={nestedTouched && nestedError!==undefined}
        fullWidth
        name={accessor}
        onChange={(e)=>setFieldValue(e.target.value)}
        type="text"
        value={value}
        variant={"outlined"}
        helperText={nestedError}
        />
    </>
}

