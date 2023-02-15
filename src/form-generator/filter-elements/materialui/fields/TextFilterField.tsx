import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../../form-elements/utils/form-generator-utils";
import {TextFilterElementInterface} from "../../interfaces/TextFilterElementInterface";
import {TextField} from "@mui/material";


export default function TextFilterField(props:TextFilterElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header, disable} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const nestedValue = getNestedValue(accessor,values)

    return <>
        <span>{Header}</span>
        <TextField
            disabled={disable}
            fullWidth
            label={Header}
            name={accessor}
            onChange={(e)=>setFieldValue(e.target.value)}
            type="text"
            value={nestedValue}
            variant={"outlined"}
        />
    </>
}
