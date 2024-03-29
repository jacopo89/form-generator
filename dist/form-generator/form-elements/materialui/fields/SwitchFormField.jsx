import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function SwitchFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChange = (event) => setFieldValue(!getNestedValue(accessor, values));
    return (<FormGroup>
            <FormControlLabel control={<Switch onChange={onChange} checked={getNestedValue(accessor, values)}/>} label={Header}/>
        </FormGroup>);
}
