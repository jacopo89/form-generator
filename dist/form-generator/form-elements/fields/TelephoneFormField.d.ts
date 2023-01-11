/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface TelephoneFormFieldInterface extends BasicFormElementInterface {
    type: "tel";
}
export default function TelephoneFormField(props: TelephoneFormFieldInterface): JSX.Element;
