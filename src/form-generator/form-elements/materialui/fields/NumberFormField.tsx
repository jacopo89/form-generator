import {NumberElementInterface} from "../../interfaces/NumberElementInterface";
import {getNestedValue} from "../../utils/form-generator-utils";
import {TextField} from "@mui/material";
import React from "react";

export default function NumberFormField(props:NumberElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header,placeholder,label} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const value = getNestedValue(accessor,values)

    return <>
        {label !== false && <span>{label ?? Header}</span>}
        <TextField
            disabled={disable}
            placeholder={placeholder}
            error={nestedTouched && nestedError!==undefined}
            fullWidth
            name={accessor}
            onChange={(e)=>setFieldValue(e.target.value)}
            type="number"
            value={value}
            variant={"outlined"}
            helperText={nestedError}
        />
    </>
}
