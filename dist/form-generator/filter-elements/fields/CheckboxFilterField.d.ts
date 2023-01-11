/// <reference types="react" />
import BasicFilterElementInterface from "../BasicFilterElementInterface";
export interface CheckboxFilterElementInterface extends BasicFilterElementInterface {
    type: "checkbox";
}
export default function CheckboxFilterField(props: CheckboxFilterElementInterface): JSX.Element;
