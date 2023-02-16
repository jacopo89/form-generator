import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import {getNestedValue} from "../../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import {Divider} from "@mui/material";
import {CollectionElementInterface} from "../../interfaces/CollectionElementInterface";

export default function CollectionFormField({accessor, nestedForm, buttonLabel ="Aggiungi",initialValues, lockList=false}:CollectionElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);

    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length

    // @ts-ignore
    const nestedElements= collectionElement.formElements
    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
                const indexAccessor = `${accessor}[${index}]`
                return (<Row key={index} className={"mb-3"}>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}>
                            { (!disable && !lockList) ? <Button className={"btn-sm p-1 rounded-circle btn-danger"}
                                     onClick={() => unsetFieldValue(indexAccessor)}>
                                <DeleteIcon/>
                            </Button> : <div>{index+1}</div>}
                        </Col>
                        <Col xs={11}>
                            <FormGeneratorContextProvider disable={disable} formValue={formValue} key={index} elements={nestedElements} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                                {nestedForm(index)}
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
            (!disable && !lockList) && <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>
                {buttonLabel}
            </Button>
        }

    </div>
}
