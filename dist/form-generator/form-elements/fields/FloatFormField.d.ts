/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface FloatElementInterface extends BasicFormElementInterface {
    type: "float";
}
export default function FloatFormField(props: FloatElementInterface): JSX.Element;
