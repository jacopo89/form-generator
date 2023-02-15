import React from "react";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
export default function RadioFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, options } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const nestedValue = getNestedValue(accessor, values);
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return (<FormControl>
            <FormLabel>{Header}</FormLabel>
            <RadioGroup name="accessor" row value={nestedValue} onChange={onChangeRadio}>
                {options.map(option => <FormControlLabel key={option.value} disabled={disable} value={option.value} control={<Radio />} label={option.label}/>)}
            </RadioGroup>
        </FormControl>);
}
