/// <reference types="react" />
import BasicFilterElementInterface from "../BasicFilterElementInterface";
export interface TextFilterElementInterface extends BasicFilterElementInterface {
    type: "text";
}
export default function TextFilterField(props: TextFilterElementInterface): JSX.Element;
