import { Form } from "react-bootstrap";
import React from 'react'

interface FormGroupInterface{
    children:any
}
export function FormGroup({children}:FormGroupInterface){
    return <Form.Group as={"div"} style={{position: "relative"}}>{children}</Form.Group>
}
