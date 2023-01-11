/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface CheckboxFormElementInterface extends BasicFormElementInterface {
    type: "checkbox";
}
export default function CheckboxFormField(props: CheckboxFormElementInterface): JSX.Element;
