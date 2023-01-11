import BasicFormElementInterface from "../../BasicFormElementInterface";
import 'react-quill/dist/quill.snow.css';
export interface WYSIWYGElementInterface extends BasicFormElementInterface {
    type: "wysiwyg";
}
export default function WYSIWYGFormField(props: WYSIWYGElementInterface): JSX.Element;
