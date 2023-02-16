import SelectElementInterface, {SelectOption} from "../../interfaces/SelectElementInterface";
import React, {useCallback, useEffect, useState} from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {MenuItem, TextField} from "@mui/material";

export default function SelectFormField(element:SelectElementInterface){
    const {type,values,disable, errors,options, touched,setFieldValue,accessor,Header} = element

    const [value, setValue] = useState<SelectOption|undefined>(options.find(option => option.value === getNestedValue(accessor,values) ));
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const updateSelectValue =  useCallback(()=>{
        if(options.find(option => option.value === getNestedValue(accessor,values) )!== value){
            setValue(options.find(option => option.value === getNestedValue(accessor,values) ))
        }
    },[accessor, values, value])

    useEffect(()=>{
        updateSelectValue()
    },[values])

    return <>
        <span>{Header}</span>
        <TextField
            disabled={disable}
            error={nestedTouched && nestedError!==undefined}
            fullWidth
            helperText={nestedTouched ? (nestedError ?? "") : ""}
            onChange={(e) =>setFieldValue(e.target.value)}
            select
            value={value}
            variant="outlined"
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    </>
}
