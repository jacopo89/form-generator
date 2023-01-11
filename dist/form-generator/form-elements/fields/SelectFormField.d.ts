import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string | number | undefined;
}
export interface SelectFormElementInterface extends BasicFormElementInterface {
    type: "select";
    options: Option[];
}
export default function SelectFormField(element: SelectFormElementInterface): JSX.Element;
