/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface TagsElementInterface extends BasicFormElementInterface {
    type: "tags";
}
export default function TagsFormField(props: TagsElementInterface): JSX.Element;
