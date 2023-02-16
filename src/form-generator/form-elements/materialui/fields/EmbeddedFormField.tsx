import React, {useContext, useMemo} from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import {Divider, Grid} from "@mui/material";
import {EmbeddedElementInterface} from "../../interfaces/EmbeddedElementInterface";

export default function EmbeddedFormField({accessor,nestedForm,initialValues}:EmbeddedElementInterface){

    const {setFieldValue,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);

    const existingElement = getNestedValue(accessor,values)

    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor ===accessor);

    // @ts-ignore
    const nestedElements= embeddedElement.formElements
    const nestedForms = useMemo(()=>{
        return (<Grid container className={"mb-3"}>
                    <Grid item xs={12}>
                        <FormGeneratorContextProvider children={nestedForm ? nestedForm(1) : undefined} formValue={formValue} elements={nestedElements} initialValues={initialValues} existingValue={existingElement}  accessorRoot={accessorRoot} onChange={(value) => setFieldValue(accessor, value)} />
                        <Divider light/>
                    </Grid>

                </Grid>)
    },[existingElement, accessor, initialValues])


    if(embeddedElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
    </div>
}
