import React from 'react'
import {FormElements} from "../form-generator/ElementInterface";
import FormGeneratorContext from '../form-generator/form-context/FormGeneratorContext';
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {Col, Row} from "react-bootstrap";
import FormGeneratorThemeContext from "../form-generator-theme/FormGeneratorThemeContext";

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


export default function App(){
    return <div>
        <FormGeneratorThemeContext.Provider value="bootstrap">
            <FormGeneratorContextProvider elements={companyFormElements} initialValues={initialValues} onSubmit={(values)=>{console.log("values",values)}}>
                <FormGeneratorContext.Consumer>
                    {({values})=>{
                        return <div >
                            <div>
                                <h3>Portals</h3>
                                <div>
                                    <FormElement accessor={"portalSubscriptions"} nestedForm={PortalSubscriptionForm}/>
                                </div>
                            </div>
                            <div>
                                <button type={"submit"}>Salva</button>
                            </div>
                        </div>
                    }}
                </FormGeneratorContext.Consumer>
            </FormGeneratorContextProvider>
        </FormGeneratorThemeContext.Provider>

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
