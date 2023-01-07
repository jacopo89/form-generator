/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface PriceElementInterface extends BasicFormElementInterface {
    type: "price";
}
export default function PriceFormField(props: PriceElementInterface): JSX.Element;
