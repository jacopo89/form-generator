import ReactDom from 'react-dom'
import React from 'react'
import App from "./tests/App";

export {default as FormElement} from "./form-generator/form-elements/FormElement"
export {default as FormGeneratorContext} from "./form-generator/form-context/FormGeneratorContext"
export {default as FormGeneratorContextProvider} from "./form-generator/form-context/FormGeneratorContextProvider"
export {FormElements} from "./form-generator/ElementInterface"
export {useFormElementValue} from "./form-generator/form-elements/FormElement"




// @ts-ignore
const root = ReactDom.render(<App />,document.getElementById('root')); // createRoot(container!) if you use TypeScript

