import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import {getNestedValue} from "../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import {Divider} from "@mui/material";
import FormElement from "../FormElement";

export interface DictionaryElementInterface extends BasicFormElementInterface{
    type:"dictionary",
    nestedForm:(index:number)=> JSX.Element,
    initialValues: any,
    validationSchema:any,
}

const nestedBasicElements:FormElements = [
    {
        Header:"Key",
        type:"text",
        accessor:"key"
    },
    {
        Header:"Type",
        type:"select",
        accessor:"type",
        options:[
            {label:"Text", value:"text"},
            {label:"Number", value:"number"},
        ],
    },
    {
        Header:"Value",
        type:"text",
        accessor:"value",
    }
]

export default function DictionaryFormField({accessor,initialValues}:DictionaryElementInterface){


    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);


    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length

    const nestedElements = nestedBasicElements.map(nested => {
        if(nested.accessor === "value"){
            nested.type = getNestedValue(accessor,values)["type"];
            return nested;
        }
        return nested;
    })


    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
            const indexAccessor = `${accessor}[${index}]`
            return (<Row className={"mb-3"}>
                    <Col xs={1}>
                        <Button className={"btn-sm p-1 rounded-circle bg-danger"}
                                                            onClick={() => unsetFieldValue(indexAccessor)}>
                            <DeleteIcon/>
                        </Button>
                    </Col>
                    <Col xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} key={index} elements={nestedElements} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
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

                </Row>
            )})
    },[existingElements, accessor, initialValues])


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {
            <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>
                Add
            </Button>
        }

    </div>
}
