import {Button} from "react-bootstrap";
import React, {useEffect} from "react";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../../utils/DropzonePreview";
import {readFile} from "../../utils/FileUploadedHelper";
import 'react-dropzone-uploader/dist/styles.css'
import {getNestedValue} from "../../utils/form-generator-utils";
import {FileElementInterface} from "../../interfaces/FileElementInterface";

export default function FileFormField(props:FileElementInterface){
    const {type,values,disable, errors, touched,setFieldValue,accessor,Header, accept} = props

    const existingFile = getNestedValue(accessor,values)
    useEffect(()=>{

    },[values])

    // @ts-ignore
    return <>
        <div>{Header}</div>
        {existingFile  && <>
            {existingFile.url && <Button onClick={() => {
                window.open(process.env.REACT_APP_ENTRYPOINT + existingFile.url)
            }}>Download file</Button>}
            {!disable && <Button onClick={() => {
                setFieldValue(null)
            }}>Rimuovi file</Button>}
            </>}
        {!existingFile && !disable && <Dropzone
            onSubmit={(successFiles) => {
                const files = successFiles.map(file => file.file)
                // @ts-ignore
            }}
            onChangeStatus={(file, status, allFiles) => {

                // @ts-ignore
                readFile(file.file).then(result => setFieldValue(result))

            }}

            PreviewComponent={DropzonePreview}
            accept={accept}
            maxFiles={1}
            //SubmitButtonComponent={button}
            inputContent="Carica file"
        />}
        {!existingFile && disable && <div>Nessun file caricato</div>}
    </>
}