import SelectFormField, {SelectFormElementInterface} from "./fields/SelectFormField";
import React from "react";
import TextFormField, {TextElementInterface} from "./fields/TextFormField";
import RadioFormField, {RadioFormElementInterface} from "./fields/RadioFormField";
import CheckboxFormField, {CheckboxFormElementInterface} from "./fields/CheckboxFormField";
import WYSIWYGFormField, {WYSIWYGElementInterface} from "./fields/WYSIWYGFormField";
import TagsFormField, {TagsElementInterface} from "./fields/TagsFormField";
import NumberFormField, {NumberElementInterface} from "./fields/NumberFormField";
import CollectionFormField, {CollectionElementInterface} from "./fields/CollectionFormField";
import EmbeddedFormField, {EmbeddedElementInterface} from "./fields/EmbeddedFormField";
import FileFormField, {FileFormElementInterface} from "./fields/FileFormField";
import DateFormField, {DateElementInterface} from "./fields/DateFormField";
import {CountriesElementInterface} from "../ElementInterface";
import CountriesFormField, {CountriesFormElementInterface} from "./fields/CountriesFormField";
import PasswordFormField, {PasswordElementInterface} from "./fields/PasswordFormField";
import FloatFormField, {FloatElementInterface} from "./fields/FloatFormField";
import PriceFormField, {PriceElementInterface} from "./fields/PriceFormField";

export type GenericFormElementInterface = TextElementInterface | SelectFormElementInterface | RadioFormElementInterface | CheckboxFormElementInterface |WYSIWYGElementInterface | TagsElementInterface|NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface | FileFormElementInterface | DateElementInterface | CountriesFormElementInterface | PasswordElementInterface | FloatElementInterface | PriceElementInterface

export default function FormElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFormField {...props}/>
        case "select":
            return <SelectFormField  {...props}/>
        case "checkbox":
            return <CheckboxFormField  {...props}/>
        case "radio":
            return <RadioFormField  {...props}/>
        case "wysiwyg":{
            return <WYSIWYGFormField {...props}/>
        }
        case "tags":{
            return <TagsFormField {...props}/>
        }
        case "number":{
            return <NumberFormField {...props}/>
        }
        case "collection":{
            return <CollectionFormField {...props} />
        }
        case "embedded":{
            return <EmbeddedFormField {...props} />
        }
        case "file":{
            return <FileFormField {...props} />
        }
        case "date":{
            return <DateFormField {...props}/>
        }
        case "countries":{
            return <CountriesFormField {...props}/>
        }
        case "password":{
            return <PasswordFormField {...props}/>
        }
        case "float":{
            return <FloatFormField {...props}/>
        }
        case "price":{
            return <PriceFormField {...props}/>
        }
    }
    return <></>
}
