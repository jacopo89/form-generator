import BootstrapFormElementGenerator from "./bootstrap/FormElementGenerator";
import {useContext, useEffect} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {getAccessorElementsNoIndex, getNestedValue} from "./utils/form-generator-utils";
import {Option} from "./fields/SelectFormField";

interface FormElementInterface {
    accessor:string,
    nestedForm?:(index:number)=>JSX.Element,
    options?:Option[],
}

function getElement(elements: GenericElementInterface[], accessorParsed: string[]) {
    let element = null;
    let haystack = elements;
    accessorParsed.forEach((accessor) => {
        if(haystack === undefined) return
        if(Array.isArray(haystack)){
            const piece = haystack.find(formElement => formElement.accessor === accessor);
            // @ts-ignore
            haystack = piece?.formElements;
            element = piece;
        }
    })

    return element;
}

export default function FormElement({accessor,nestedForm, options}:FormElementInterface){
    const {values,errors,touched,setFieldValue,elements,accessorRoot,disable} = useContext(FormGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);

    // @ts-ignore
    const finalOptions = options || element?.options
    const finalAccessor = accessor
    if(element){
        // @ts-ignore
        return <BootstrapFormElementGenerator nestedForm={nestedForm} {...element} disable={disable} accessorRoot={accessorRoot} type={element.type} values={values} errors={errors} touched={touched} setFieldValue={(value) => setFieldValue(finalAccessor, value)} Header={element.Header} accessor={finalAccessor} options={finalOptions}/>
    }
    return <div>{accessor}</div>

}

export function getFormElementValue(accessor:string){
    const {values,errors,touched,setFieldValue,elements,accessorRoot,disable} = useContext(FormGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);

    return getNestedValue(accessor,values)
}
