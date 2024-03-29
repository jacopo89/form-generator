import React from "react";

import TextFormField from "./fields/TextFormField";
import {GenericFormElementInterface} from "../FormElementGenerator";
import NumberFormField from "./fields/NumberFormField";
import SelectFormField from "./fields/SelectFormField";
import RadioFormField from "./fields/RadioFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import SwitchFormField from "./fields/SwitchFormField";
import CollectionFormField from "./fields/CollectionFormField";
import EmbeddedFormField from "./fields/EmbeddedFormField";
import DictionaryFormField from "./fields/DictionaryFormField";
import WYSIWYGFormField from "./fields/WYSIWYGFormField";
import PriceFormField from "./fields/PriceFormField";
import PasswordFormField from "./fields/PasswordFormField";
import DateFormField from "./fields/DateFormField";
import TagsFormField from "./fields/TagsFormField";


export default function MaterialFormElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFormField {...props}/>
        case "password":
            return <PasswordFormField {...props} />
        case "number":
            return <NumberFormField {...props}/>
        case "select":
            return <SelectFormField {...props}/>
        case "radio":
            return <RadioFormField {...props}/>
        case "checkbox":
            return <CheckboxFormField {...props} />
        case "switch":
            return <SwitchFormField {...props} />
        case "collection":
            return <CollectionFormField {...props} />
        case "embedded":
            return <EmbeddedFormField {...props} />
        case "dictionary":
            return <DictionaryFormField {...props} />
        case "wysiwyg":
            return <WYSIWYGFormField {...props}/>
        case "price":
            return <PriceFormField {...props}/>
        case "date":
            return <DateFormField {...props} />
        case "tags":
            return <TagsFormField {...props}/>

    }
    return <></>
}
