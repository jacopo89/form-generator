import BasicFormElementInterface from "../../BasicFormElementInterface";
import 'react-datepicker/dist/react-datepicker.css';
export interface DateElementInterface extends BasicFormElementInterface {
    type: "date";
}
export default function DateFormField(props: DateElementInterface): JSX.Element;
