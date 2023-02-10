import React from 'react'
import {FormElements} from "../form-generator/ElementInterface";
import FormGeneratorContext from '../form-generator/form-context/FormGeneratorContext';
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {Button, Col, Row} from "react-bootstrap";
import FormGeneratorThemeContext from "../form-generator-theme/FormGeneratorThemeContext";
import FormGeneratorThemeContextProvider from "../form-generator-theme/FormGeneratorThemeContextProvider";
import useFormGeneratorThemeContext from "../form-generator-theme/useFormGeneratorThemeContext";
import * as Yup from 'yup'
const companyFormElements:FormElements = [
    {
        accessor:"companyName",
        type:"text",
        Header:"Company name"
    },
    {
        accessor:"portalSubscriptions",
        type:"collection",
        Header:"Subscriptions",
        formElements:[
            {
                Header:"id",
                type:"number",
                accessor:"id"
            },
            {accessor:"active", type:"checkbox", Header:"active"},
            {accessor:"portal", type:"embedded", Header:"Portal",
                formElements:[
                    {accessor:"name", type:"text",Header:"Nome"}
                ],
                initialValues:{name:""}
            },
            {
                accessor:"credentials",
                type:"dictionary",
                Header:"Credentials",
                initialValues:{}

            },
        ],
        initialValues:{
            active:false,
            credentials:[]
        }
    },

]

const initialValues = {
    companyName:"",
    portalSubscriptions:[],
}

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
})


export default function App(){
    return <div className={"mx-5 px-5"}>
        <FormGeneratorThemeContextProvider theme="bootstrap">
            <FormGeneratorContextProvider validationSchema={validationSchema} elements={companyFormElements} initialValues={initialValues} onSubmit={(values)=>{console.log("values",values)}}>
                <FormGeneratorContext.Consumer>
                    {({values})=>{
                        return <Portals/>
                    }}
                </FormGeneratorContext.Consumer>
            </FormGeneratorContextProvider>
        </FormGeneratorThemeContextProvider>

    </div>
}

const Portals = () => {

    const {theme,setTheme} = useFormGeneratorThemeContext()

    return <div >
        <div>
            <h3>Portals</h3>
            <Button disabled={theme === "bootstrap"} onClick={()=>{setTheme("bootstrap")}}>Bootstrap</Button>
            <Button disabled={theme === "material-ui"} onClick={()=>{setTheme("material-ui")}}>Material - UI</Button>
            <div>
                <FormElement accessor={"companyName"}/>
                {/*<FormElement accessor={"portalSubscriptions"} nestedForm={PortalSubscriptionForm}/>*/}
            </div>
        </div>
        <div>
            <button type={"submit"}>Salva</button>
        </div>
    </div>
}

const PortalSubscriptionForm = (index:number) => {


    return <Row>
        <Col xs={12} >
            <FormElement accessor={"portal"} nestedForm={PortalForm}></FormElement>
        </Col>
        <Col xs={12}  >
            <FormElement accessor={"active"}/>
        </Col>
        <Col xs={12}  >
            <FormElement accessor={"credentials"}/>
        </Col>

    </Row>
}

const PortalForm = (index:number) => {
    return <div>
        <FormElement accessor={"name"}></FormElement>
    </div>
}
