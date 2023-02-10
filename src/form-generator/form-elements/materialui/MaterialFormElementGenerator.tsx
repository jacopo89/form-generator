import React from "react";

import TextFormField from "./fields/TextFormField";
import {GenericFormElementInterface} from "../FormElementGenerator";
import NumberFormField from "./fields/NumberFormField";
import SelectFormField from "./fields/SelectFormField";
import RadioFormField from "./fields/RadioFormField";


export default function MaterialFormElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFormField {...props}/>
        case "number":
            return <NumberFormField {...props}/>
        case "select":
            return <SelectFormField {...props}/>
        case "radio":
            return <RadioFormField {...props}/>
    }
    return <></>
}
