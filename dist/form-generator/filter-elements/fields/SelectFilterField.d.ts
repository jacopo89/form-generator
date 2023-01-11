import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string | undefined;
}
export interface SelectFilterElementInterface extends BasicFormElementInterface {
    type: "select";
    options: Option[];
}
export default function SelectFilterField(element: SelectFilterElementInterface): JSX.Element;
