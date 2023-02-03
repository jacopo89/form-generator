/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
import { FormElements } from "../../ElementInterface";
export interface CollectionElementInterface extends BasicFormElementInterface {
    type: "collection";
    formElements: FormElements;
    buttonLabel: string;
    nestedForm: (index: number) => JSX.Element;
    initialValues: object;
    lockList?: boolean;
}
export default function CollectionFormField({ accessor, nestedForm, buttonLabel, initialValues, lockList }: CollectionElementInterface): JSX.Element;
