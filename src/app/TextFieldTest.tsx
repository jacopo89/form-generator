import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";


const companyFormElements:FormElements = [
    {
        accessor:"companyName",
        type:"text",
        Header:"Company name"
    }
]
const initialValues = {
    companyName:"ANDREA",
}
const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
})

const formDescriptor = new FormDescriptor({elements:companyFormElements,initialValues, validationSchema})

export default function TextFieldTest(){
    return <>
        <FormGeneratorContextProvider formDescriptor={formDescriptor}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <TextElement/>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}

const TextElement= () => {
    return <>
        <FormElement accessor="companyName"/>
    </>
}
