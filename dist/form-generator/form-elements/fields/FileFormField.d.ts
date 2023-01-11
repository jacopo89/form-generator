/// <reference types="react" />
import BasicFormElementInterface from "../../BasicFormElementInterface";
import 'react-dropzone-uploader/dist/styles.css';
import { FileType } from "../../ElementInterface";
export interface FileFormElementInterface extends BasicFormElementInterface {
    type: "file";
    accept: FileType;
}
export default function FileFormField(props: FileFormElementInterface): JSX.Element;
