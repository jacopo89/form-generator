/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface Option {
    label: string;
    value: string;
}
export interface CountriesFormElementInterface extends BasicFormElementInterface {
    type: "countries";
}
export default function CountriesFormField(element: CountriesFormElementInterface): JSX.Element;
