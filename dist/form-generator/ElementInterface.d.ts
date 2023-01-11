import { Option as SelectOption } from "./form-elements/fields/SelectFormField";
import { Option as RadioOption } from "./form-elements/fields/RadioFormField";
export declare type ElementType = "text" | "number" | "select" | "radio" | "checkbox" | "file" | "wysiwyg" | "tags" | "collection" | "embedded" | "date" | "countries" | "password" | "float" | "price" | "tel";
export declare type FileType = "*" | "image/*" | "application/*" | "application/pdf";
export default interface ElementInterface {
    Header: string;
    accessor: string;
    type: ElementType;
}
export interface TextElementInterface extends ElementInterface {
    type: "text";
}
export interface CheckboxElementInterface extends ElementInterface {
    type: "checkbox";
}
export interface RadioElementInterface extends ElementInterface {
    type: "radio";
    options: RadioOption[];
}
export interface TextElementInterface extends ElementInterface {
    type: "text";
}
export interface CountriesElementInterface extends ElementInterface {
    type: "countries";
}
export interface SelectElementInterface extends ElementInterface {
    type: "select";
    options: SelectOption[];
}
export interface WYSIWYGElementInterface extends ElementInterface {
    type: "wysiwyg";
}
export interface TagsElementInterface extends ElementInterface {
    type: "tags";
}
export interface NumberElementInterface extends ElementInterface {
    type: "number";
}
export interface DateElementInterface extends ElementInterface {
    type: "date";
}
export interface CollectionElementInterface extends ElementInterface {
    type: "collection";
    formElements: FormElements;
    initialValues: object;
}
export interface EmbeddedElementInterface extends ElementInterface {
    type: "embedded";
    formElements: FormElements;
    initialValues: object;
}
export interface FileElementInterface extends ElementInterface {
    type: "file";
    accept: FileType;
}
export interface PasswordElementInterface extends ElementInterface {
    type: "password";
}
export interface FloatElementInterface extends ElementInterface {
    type: "float";
}
export interface PriceElementInterface extends ElementInterface {
    type: "price";
}
export interface TelephoneElementInterface extends ElementInterface {
    type: "tel";
}
export declare type GenericElementInterface = TextElementInterface | SelectElementInterface | CheckboxElementInterface | RadioElementInterface | WYSIWYGElementInterface | TagsElementInterface | NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface | FileElementInterface | DateElementInterface | CountriesElementInterface | PasswordElementInterface | FloatElementInterface | PriceElementInterface | TelephoneElementInterface;
export declare type FormElements = GenericElementInterface[];
