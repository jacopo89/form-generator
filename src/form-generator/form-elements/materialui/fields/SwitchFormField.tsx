import React, { useState } from "react";
import {Checkbox, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {CheckboxElementInterface} from "../../interfaces/CheckboxElementInterface";
import {getNestedValue} from "../../utils/form-generator-utils";
import {SwitchElementInterface} from "../../interfaces/SwitchElementInterface";

export default function SwitchFormField(props:SwitchElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=> setFieldValue(!getNestedValue(accessor,values))

    return (
        <FormGroup>
            <FormControlLabel control={<Switch onChange={onChange} checked={getNestedValue(accessor,values)} />} label={Header} />
        </FormGroup>
    )
}
