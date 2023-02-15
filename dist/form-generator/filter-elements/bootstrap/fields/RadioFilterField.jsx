import { Form } from "react-bootstrap";
import React from "react";
import { getNestedValue } from "../../../form-elements/utils/form-generator-utils";
export default function RadioFilterField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header, options } = props;
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return <>
        <Form.Label>{Header}</Form.Label>
        <div>
            {options.map(option => <Form.Check name={accessor} type="radio" value={option.value} label={option.label} id={option.value} inline onChange={onChangeRadio} checked={getNestedValue(accessor, values) === option.value}/>)}
        </div>

    </>;
}
