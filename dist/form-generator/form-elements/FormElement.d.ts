/// <reference types="react" />
import { SelectOption } from "./interfaces/SelectElementInterface";
import { RadioOption } from "./interfaces/RadioElementInterface";
interface FormElementInterface {
    accessor: string;
    nestedForm?: (index: number) => JSX.Element;
    options?: SelectOption[] | RadioOption[];
}
export default function FormElement({ accessor, nestedForm, options }: FormElementInterface): JSX.Element;
export declare function useFormElementValue(accessor: string): any;
export {};
