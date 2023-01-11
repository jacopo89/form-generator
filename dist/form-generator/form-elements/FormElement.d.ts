import { Option } from "./fields/SelectFormField";
interface FormElementInterface {
    accessor: string;
    nestedForm?: (index: number) => JSX.Element;
    options?: Option[];
}
export default function FormElement({ accessor, nestedForm, options }: FormElementInterface): JSX.Element;
export {};
