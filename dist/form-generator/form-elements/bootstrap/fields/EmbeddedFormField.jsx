import { Col, Row } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { Divider } from "@mui/material";
export default function EmbeddedFormField({ accessor, nestedForm, initialValues }) {
    const { setFieldValue, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor, values);
    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor === accessor);
    // @ts-ignore
    const nestedElements = embeddedElement.formElements;
    const nestedForms = useMemo(() => {
        return (<Row className={"mb-3"}>
                    <Col xs={12}>
                        <FormGeneratorContextProvider formValue={formValue} elements={nestedElements} initialValues={initialValues} existingValue={existingElement} accessorRoot={accessorRoot} onChange={(value) => {
                console.log("accessor when saving embedded", accessor);
                return setFieldValue(accessor, value);
            }}>
                            {nestedForm(1)}
                        </FormGeneratorContextProvider>
                        <Divider light/>
                    </Col>

                </Row>);
    }, [existingElement, accessor, initialValues]);
    if (embeddedElement === undefined)
        return <div>{accessor}</div>;
    return <div>
        {nestedForms}
    </div>;
}
