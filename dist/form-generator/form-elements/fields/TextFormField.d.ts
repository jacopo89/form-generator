import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface TextElementInterface extends BasicFormElementInterface {
    type: "text";
}
export default function TextFormField(props: TextElementInterface): JSX.Element;
