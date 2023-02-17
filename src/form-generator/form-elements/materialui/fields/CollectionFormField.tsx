import React, {useContext, useMemo} from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import {getNestedValue} from "../../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Divider, Grid} from "@mui/material";
import {CollectionElementInterface} from "../../interfaces/CollectionElementInterface";
import AddIcon from "@mui/icons-material/Add";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";

export default function CollectionFormField({accessor, nestedForm,addButton:addButtonProps,removeButton:removeButtonProps, initialValues, lockList=false}:CollectionElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)

    const addButton = (!disable && !lockList) && ( (addButtonProps) ?  React.cloneElement(addButtonProps,{onClick:(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}) : <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}><AddIcon/></Button>)
    const removeButton = (indexAccessor:string) => {
        return (!disable && !lockList) && ( (removeButtonProps) ?  React.cloneElement(removeButtonProps,{onClick:() => unsetFieldValue(indexAccessor)}) : <Button onClick={() => unsetFieldValue(indexAccessor)}><DeleteIcon/></Button>)
    }
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);

    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length
    // @ts-ignore
    const nestedElements= collectionElement.formElements
    const formDescriptor = new FormDescriptor({elements:nestedElements,initialValues})
    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
                const indexAccessor = `${accessor}[${index}]`
                return (<Grid container className={"mb-3"}>
                        <Grid item xs={1}>
                            {removeButton(indexAccessor)}
                        </Grid>
                        <Grid item xs={11}>
                            <FormGeneratorContextProvider disable={disable} formValue={formValue} key={index} formDescriptor={formDescriptor} existingValue={getNestedValue(indexAccessor, values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)} children={nestedForm ? nestedForm(index) : undefined}/>
                            <Divider light/>
                        </Grid>
                    </Grid>
                )})
    },[existingElements, accessor, initialValues])


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {addButton}
    </div>
}
