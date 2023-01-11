/// <reference types="react" />
import { SelectFormElementInterface } from "./fields/SelectFormField";
import { TextElementInterface } from "./fields/TextFormField";
import { RadioFormElementInterface } from "./fields/RadioFormField";
import { CheckboxFormElementInterface } from "./fields/CheckboxFormField";
import { WYSIWYGElementInterface } from "./fields/WYSIWYGFormField";
import { TagsElementInterface } from "./fields/TagsFormField";
import { NumberElementInterface } from "./fields/NumberFormField";
import { CollectionElementInterface } from "./fields/CollectionFormField";
import { EmbeddedElementInterface } from "./fields/EmbeddedFormField";
import { FileFormElementInterface } from "./fields/FileFormField";
import { DateElementInterface } from "./fields/DateFormField";
import { TelephoneFormFieldInterface } from "./fields/TelephoneFormField";
import { CountriesFormElementInterface } from "./fields/CountriesFormField";
import { PasswordElementInterface } from "./fields/PasswordFormField";
import { FloatElementInterface } from "./fields/FloatFormField";
import { PriceElementInterface } from "./fields/PriceFormField";
export declare type GenericFormElementInterface = TextElementInterface | SelectFormElementInterface | RadioFormElementInterface | CheckboxFormElementInterface | WYSIWYGElementInterface | TagsElementInterface | NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface | FileFormElementInterface | DateElementInterface | CountriesFormElementInterface | PasswordElementInterface | FloatElementInterface | PriceElementInterface | TelephoneFormFieldInterface;
export default function FormElementGenerator(props: GenericFormElementInterface): JSX.Element;
