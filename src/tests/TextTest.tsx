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
        accessor:"companyName",
        type:"text",
        Header:"Company name"
    }
]

const initialValues = {
    companyName:"",
}

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
})


export default function TextTest(){
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

        <h3>TEXT</h3>
        <Button disabled={theme === "bootstrap"} onClick={()=>{setTheme("bootstrap")}}>Bootstrap</Button>
        <Button disabled={theme === "material-ui"} onClick={()=>{setTheme("material-ui")}}>Material - UI</Button>
        <div className={"my-3"}>
            <FormElement accessor={"companyName"}/>
        </div>
        <div className={"my-3"}>
            <button type={"submit"}>Salva</button>
        </div>
    </div>
}
