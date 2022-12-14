/// <reference types="react" />
interface FormElementInterface {
    accessor: string;
    nestedForm?: (index: number) => JSX.Element;
}
export default function FormElement({ accessor, nestedForm }: FormElementInterface): JSX.Element;
export {};
