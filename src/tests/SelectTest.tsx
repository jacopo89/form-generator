import {FormElements} from "../form-generator/ElementInterface";
import * as Yup from "yup";
import FormGeneratorThemeContextProvider from "../form-generator-theme/FormGeneratorThemeContextProvider";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormGeneratorContext from "../form-generator/form-context/FormGeneratorContext";
import useFormGeneratorThemeContext from "../form-generator-theme/useFormGeneratorThemeContext";
import {Button} from "react-bootstrap";
import FormElement from "../form-generator/form-elements/FormElement";
import React from "react";

const companyFormElements:FormElements = [
    {
        accessor:"options",
        type:"select",
        Header:"Options",
        options:[
            {label:"Ciao", value:"opzione1"},
            {label:"Addio!", value:"opzione2"}
        ]
    }
]

const initialValues = {
    options:"",
}

const validationSchema = Yup.object().shape({
    options: Yup.string().length(4, "Troppo lungo"),
})


export default function SelectTest(){
    return <div className={"mx-5 px-5"}>
        <FormGeneratorThemeContextProvider theme="bootstrap">
            <FormGeneratorContextProvider validationSchema={validationSchema} elements={companyFormElements} initialValues={initialValues} onSubmit={(values)=>{console.log("values",values)}}>
                <FormGeneratorContext.Consumer>
                    {({values})=>{
                        return <Element/>
                    }}
                </FormGeneratorContext.Consumer>
            </FormGeneratorContextProvider>
        </FormGeneratorThemeContextProvider>
    </div>
}

const Element = () => {

    const {theme,setTheme} = useFormGeneratorThemeContext()

    return <div >

        <h3>SELECT</h3>
        <Button disabled={theme === "bootstrap"} onClick={()=>{setTheme("bootstrap")}}>Bootstrap</Button>
        <Button disabled={theme === "material-ui"} onClick={()=>{setTheme("material-ui")}}>Material - UI</Button>
        <div className={"my-3"}>
            <FormElement accessor={"options"}/>
        </div>
        <div className={"my-3"}>
            <button type={"submit"}>Salva</button>
        </div>
    </div>
}
