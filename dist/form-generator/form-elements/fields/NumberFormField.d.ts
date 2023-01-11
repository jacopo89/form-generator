import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface NumberElementInterface extends BasicFormElementInterface {
    type: "number";
}
export default function NumberFormField(props: NumberElementInterface): JSX.Element;
