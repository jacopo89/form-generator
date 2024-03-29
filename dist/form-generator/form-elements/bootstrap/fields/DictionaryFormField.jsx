import { Button, Col, Row } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import FormElement from "../../FormElement";
const nestedBasicElements = [
    {
        Header: "Key",
        type: "text",
        accessor: "key"
    },
    {
        Header: "Type",
        type: "select",
        accessor: "type",
        options: [
            { label: "Text", value: "text" },
            { label: "Number", value: "number" },
        ],
    },
    {
        Header: "Value",
        type: "text",
        accessor: "value",
    }
];
export default function DictionaryFormField({ accessor, initialValues }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = useMemo(() => getNestedValue(accessor, values), [accessor, values]);
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    const nestedElements = useMemo(() => {
        // @ts-ignore
        const finalElements = existingElements.map((value, index) => {
            return nestedBasicElements.map(nested => {
                var _a;
                if (nested.accessor === "value") {
                    const newNested = Object.assign({}, nested);
                    newNested.type = (_a = value["type"]) !== null && _a !== void 0 ? _a : "text";
                    return newNested;
                }
                return nested;
            });
        });
        return finalElements;
    }, [existingElements]);
    const nestedForms = useMemo(() => {
        return existingElements.map((element, index) => {
            const indexAccessor = `${accessor}[${index}]`;
            return (<Row key={index} className={"mb-3"}>
                    <Col xs={1}>
                        <Button className={"btn-sm p-1 rounded-circle bg-danger"} onClick={() => unsetFieldValue(indexAccessor)}>
                            <DeleteIcon />
                        </Button>
                    </Col>
                    <Col xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} elements={nestedElements[index]} initialValues={initialValues} existingValue={getNestedValue(indexAccessor, values)} accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                            <Row>
                                <Col xs={4}>
                                    <FormElement accessor={"key"}/>
                                </Col>
                                <Col xs={4}>
                                    <FormElement accessor={"type"}/>
                                </Col>
                                <Col xs={4}>
                                    <FormElement accessor={"value"}/>
                                </Col>
                            </Row>
                        </FormGeneratorContextProvider>
                        <Divider light/>
                    </Col>

                </Row>);
        });
    }, [existingElements, accessor, initialValues, nestedElements]);
    if (collectionElement === undefined)
        return <div>{accessor}</div>;
    return <div>
        {nestedForms}
        {<Button type="button" onClick={(e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); }}>
                Add
            </Button>}

    </div>;
}
