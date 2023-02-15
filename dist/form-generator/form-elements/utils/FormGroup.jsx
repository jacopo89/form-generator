import { Form } from "react-bootstrap";
import React from 'react';
export function FormGroup({ children }) {
    return <Form.Group as={"div"} style={{ position: "relative" }}>{children}</Form.Group>;
}
