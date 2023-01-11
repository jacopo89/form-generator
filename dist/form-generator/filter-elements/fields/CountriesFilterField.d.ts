import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string;
}
export interface CountriesFilterElementInterface extends BasicFormElementInterface {
    type: "countries";
}
export default function CountriesFilterField(element: CountriesFilterElementInterface): JSX.Element;
