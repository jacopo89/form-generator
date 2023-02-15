import { Form } from "react-bootstrap";
import React from "react";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function TextFormField(props) {
    const { type, disable, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return <Form.Group as={"div"} style={{ position: "relative" }}>
        <Form.Label>{Header}</Form.Label>
        <Form.Control isInvalid={nestedTouched && nestedError !== undefined} disabled={disable} type="text" name={accessor} placeholder={Header} value={getNestedValue(accessor, values)} onChange={(e) => setFieldValue(e.target.value)}/>
        <Form.Control.Feedback className="font-weight-bold" type="invalid" role="alert" aria-label="from feedback" tooltip>
            {nestedError}
        </Form.Control.Feedback>
    </Form.Group>;
}
