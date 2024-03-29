/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface DictionaryElementInterface extends BasicFormElementInterface {
    type: "dictionary";
    nestedForm: (index: number) => JSX.Element;
    initialValues: any;
    validationSchema: any;
}
export default function DictionaryFormField({ accessor, initialValues }: DictionaryElementInterface): JSX.Element;
