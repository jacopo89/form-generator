import { Form } from "react-bootstrap";
import React from "react";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormGroup } from "../../utils/FormGroup";
export default function RadioFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, options } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <div>
            {options.map(option => <Form.Check key={option.value} isInvalid={nestedTouched && nestedError !== undefined} disabled={disable} name={accessor} type="radio" value={option.value} label={option.label} id={option.value} inline onChange={onChangeRadio} checked={getNestedValue(accessor, values) === option.value}/>)}
        </div>

    </FormGroup>;
}
