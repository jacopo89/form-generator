import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {PasswordElementInterface} from "../../interfaces/PasswordElementInterface";
import {TextField} from "@mui/material";

export default function PasswordFormField(props:PasswordElementInterface){
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
        type="password"
        value={value}
        variant={"outlined"}
        helperText={nestedError}
        />
    </>
}

