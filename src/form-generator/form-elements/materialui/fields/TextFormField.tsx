import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {TextElementInterface} from "../../interfaces/TextElementInterface";
import {TextField} from "@mui/material";

export default function TextFormField(props:TextElementInterface){
    const {disable, values, errors, touched,setFieldValue,accessor,Header,placeholder,label} = props
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
            type="text"
            value={value}
            variant={"outlined"}
            helperText={nestedError}
        />
    </>
}

