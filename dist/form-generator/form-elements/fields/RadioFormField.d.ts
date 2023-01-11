import BasicFormElementInterface from "../../BasicFormElementInterface";
import { Option } from "./SelectFormField";
export interface RadioFormElementInterface extends BasicFormElementInterface {
    type: "radio";
    options: Option[];
}
export default function RadioFormField(props: RadioFormElementInterface): JSX.Element;
