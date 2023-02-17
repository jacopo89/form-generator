import {Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {EmbeddedElementInterface} from "../../interfaces/EmbeddedElementInterface";

export default function EmbeddedFormField({accessor,nestedForm,initialValues}:EmbeddedElementInterface){
    const {setFieldValue,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor,values)

    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor ===accessor);
    // @ts-ignore
    const nestedElements= embeddedElement.formElements

    if(embeddedElement === undefined) return <div>{accessor}</div>
    return <div>
        <Row className={"mb-3"}>
            <Col xs={12}>
                <FormGeneratorContextProvider formValue={formValue} elements={nestedElements} initialValues={initialValues} existingValue={existingElement}  accessorRoot={accessor} onChange={(value) => setFieldValue(accessor, value)} children={nestedForm ?? undefined}/>
                <Divider light/>
            </Col>
        </Row>
    </div>
}
