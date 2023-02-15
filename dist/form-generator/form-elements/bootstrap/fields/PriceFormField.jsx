import { Form } from "react-bootstrap";
import React from "react";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormGroup } from "../../utils/FormGroup";
export default function PriceFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const nestedValue = getNestedValue(accessor, values);
    const onChange = (e) => setFieldValue((parseFloat(e.target.value)) * 100);
    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <Form.Control isInvalid={nestedTouched && nestedError !== undefined} type="number" name={accessor} placeholder={Header} value={nestedValue / 100} onChange={onChange}/>
        <Form.Control.Feedback className="font-weight-bold" type="invalid" role="alert" aria-label="from feedback" tooltip>
            {nestedError}
        </Form.Control.Feedback>
    </FormGroup>;
}
