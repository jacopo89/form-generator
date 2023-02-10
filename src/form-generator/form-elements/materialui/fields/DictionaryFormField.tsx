import React, {useContext, useMemo} from "react";
import {FormElements} from "../../../ElementInterface";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import {Divider, Grid, Button} from "@mui/material";
import FormElement from "../../FormElement";
import {DictionaryElementInterface} from "../../interfaces/DictionaryElementInterface";

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
    const existingElements = useMemo(()=>getNestedValue(accessor,values),[accessor,values])

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


    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
            const indexAccessor = `${accessor}[${index}]`
            return (<Grid container key={index} className={"mb-3"}>
                    <Grid item xs={1}>
                        <Button onClick={() => unsetFieldValue(indexAccessor)}>
                            <DeleteIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} elements={nestedElements[index]} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <FormElement accessor={"key"}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormElement accessor={"type"}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormElement accessor={"value"}/>
                                </Grid>
                            </Grid>
                        </FormGeneratorContextProvider>
                        <Divider light/>
                    </Grid>

                </Grid>
            )})
    },[existingElements, accessor, initialValues, nestedElements])


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
