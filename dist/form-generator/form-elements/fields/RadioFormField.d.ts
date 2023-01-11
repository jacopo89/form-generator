import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string | undefined;
}
export interface RadioFormElementInterface extends BasicFormElementInterface {
    type: "radio";
    options: Option[];
}
export default function RadioFormField(props: RadioFormElementInterface): JSX.Element;
