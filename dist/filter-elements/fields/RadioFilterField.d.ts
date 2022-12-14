/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
import { Option } from "../../form-elements/fields/SelectFormField";
export interface RadioFilterElementInterface extends BasicFormElementInterface {
    type: "radio";
    options: Option[];
}
export default function RadioFilterField(props: RadioFilterElementInterface): JSX.Element;
