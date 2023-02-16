import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import {FormElements} from "../../../ElementInterface";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import {Divider} from "@mui/material";
import FormElement from "../../FormElement";
import {FormElementInterface} from "../../interfaces/FormElementInterface";
import _ from 'lodash';

const nestedBasicElements:FormElements = [
    {
        Header:"Accessor",
        type:"text",
        accessor:"accessor"
    },
    {
        Header:"Label",
        type:"text",
        accessor:"Header"
    },
    {
        Header:"Type",
        type:"select",
        accessor:"type",
        options:[
            {label:"Text", value:"text"},
            {label:"Number", value:"number"},
            {label:"Price", value:"price"},
            {label:"Select", value:"select"},
        ],
    },
    {
        Header:"Options",
        type:"collection",
        accessor:"options",
        formElements:[
            {Header:"Label", type:"text",accessor:"label"},
            {Header:"Value", type:"text",accessor:"value"}
        ],
        initialValues:{}
    }
]

const initialValues = {
    accessor:undefined,
    type:"text",
    Header:undefined,
    options:[]
}

export default function FormFormField({accessor}:FormElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);
    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length

    const nestedElements = useMemo(()=>{
        // @ts-ignore
        const finalElements =  existingElements.map((value,index) => {
            return nestedBasicElements.map(nested => {
                if(nested.accessor === "value"){
                    const newNested = {...nested};
                    newNested.type = value["type"] ?? "text";
                    return newNested;
                }
                return nested;
            })
        })

        return finalElements
    },[existingElements])


    const nestedForms = existingElements.map((element:any,index:number)=>{
            const indexAccessor = `${accessor}[${index}]`

            return (<Row key={index} className={"mb-3"}>
                    <Col xs={1} className={"d-flex justify-content-center align-items-center"}>
                        <Button className={"btn-sm btn-danger rounded-circle p-1"} onClick={() => unsetFieldValue(indexAccessor)}>
                            <DeleteIcon/>
                        </Button>
                    </Col>
                    <Col xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} elements={nestedElements[index]} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => {
                            setFieldValue(indexAccessor, {...value,accessor:_.camelCase(value.Header)})
                        }}>
                            <FormGeneratorContext.Consumer>
                                {({values})=>{
                                    return <Row>
                                        <Col xs={4}>
                                            <FormElement accessor={"Header"}/>
                                        </Col>
                                        <Col xs={4}>
                                            <FormElement accessor={"type"}/>
                                        </Col>
                                        {values["type"] ==="select" && <Row>
                                            <Col xs={12}>
                                                <FormElement accessor={"options"} nestedForm={OptionsForm} />
                                            </Col>
                                        </Row>}
                                    </Row>
                                }}
                            </FormGeneratorContext.Consumer>
                        </FormGeneratorContextProvider>
                        <Divider light/>
                    </Col>

                </Row>
            )})


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        <Button type="button" onClick={(e)=>{e.preventDefault();setFieldValue(`${accessor}[${existing}]`,initialValues)}}>Add</Button>

    </div>
}

const OptionsForm = () => {
    return <Row>
        <Col xs={6}>
            <FormElement accessor={"label"}></FormElement>
        </Col>
        <Col xs={6}>
            <FormElement accessor={"value"}></FormElement>
        </Col>
    </Row>
}
