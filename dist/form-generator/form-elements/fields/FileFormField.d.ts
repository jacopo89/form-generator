/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
import 'react-dropzone-uploader/dist/styles.css';
export interface FileFormElementInterface extends BasicFormElementInterface {
    type: "file";
}
export default function FileFormField(props: FileFormElementInterface): JSX.Element;
