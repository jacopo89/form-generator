import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../../utils/DropzonePreview";
import { readFile } from "../../utils/FileUploadedHelper";
import 'react-dropzone-uploader/dist/styles.css';
import { getNestedValue } from "../../utils/form-generator-utils";
export default function FileFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, accept } = props;
    const existingFile = getNestedValue(accessor, values);
    useEffect(() => {
    }, [values]);
    // @ts-ignore
    return _jsxs(_Fragment, { children: [_jsx("div", { children: Header }), existingFile && _jsxs(_Fragment, { children: [existingFile.url && _jsx(Button, Object.assign({ onClick: () => {
                            window.open(process.env.REACT_APP_ENTRYPOINT + existingFile.url);
                        } }, { children: "Download file" })), !disable && _jsx(Button, Object.assign({ onClick: () => {
                            setFieldValue(null);
                        } }, { children: "Rimuovi file" }))] }), !existingFile && !disable && _jsx(Dropzone, { onSubmit: (successFiles) => {
                    const files = successFiles.map(file => file.file);
                    // @ts-ignore
                }, onChangeStatus: (file, status, allFiles) => {
                    // @ts-ignore
                    readFile(file.file).then(result => setFieldValue(result));
                }, PreviewComponent: DropzonePreview, accept: accept, maxFiles: 1, 
                //SubmitButtonComponent={button}
                inputContent: "Carica file" }), !existingFile && disable && _jsx("div", { children: "Nessun file caricato" })] });
}
