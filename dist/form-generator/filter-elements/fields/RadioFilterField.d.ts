/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string | undefined;
}
export interface RadioFilterElementInterface extends BasicFormElementInterface {
    type: "radio";
    options: Option[];
}
export default function RadioFilterField(props: RadioFilterElementInterface): JSX.Element;
