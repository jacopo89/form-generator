import React from "react";
import {FormElements} from "../../../ElementInterface";
import DeleteIcon from "@mui/icons-material/Delete";
import {Button, Divider, Grid} from "@mui/material";
import FormElement from "../../FormElement";
import {DictionaryElementInterface} from "../../interfaces/DictionaryElementInterface";
import useDictionary from "../../hooks/useDictionary";

export default function DictionaryFormField({accessor,initialValues}:DictionaryElementInterface){
    const {adder,collectionElement,nestedElements,remover,getFormGeneratorProvider} = useDictionary({accessor:accessor,initialValues:initialValues});
    const nestedForms = nestedElements.map((element:any, index:number) =>{
        return (<Grid container key={index} className={"mb-3"}>
                <Grid item xs={1}>
                    <Button onClick={()=>remover(index)}>
                        <DeleteIcon/>
                    </Button>
                </Grid>
                <Grid item xs={11}>
                    {getFormGeneratorProvider(index,<Grid container>
                        <Grid item xs={4}>
                            <FormElement accessor={"key"}/>
                        </Grid>
                        <Grid item xs={4}>
                            <FormElement accessor={"type"}/>
                        </Grid>
                        <Grid item xs={4}>
                            <FormElement accessor={"value"}/>
                        </Grid>
                    </Grid>)}
                    <Divider light/>
                </Grid>

            </Grid>
        )})

    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {
            <Button type="button" onClick={(e)=>{e.preventDefault(); adder()}}>
                Add
            </Button>
        }

    </div>
}
