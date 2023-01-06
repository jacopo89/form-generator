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
import { CountriesFormElementInterface } from "./fields/CountriesFormField";
import { PasswordElementInterface } from "./fields/PasswordFormField";
export declare type GenericFormElementInterface = TextElementInterface | SelectFormElementInterface | RadioFormElementInterface | CheckboxFormElementInterface | WYSIWYGElementInterface | TagsElementInterface | NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface | FileFormElementInterface | DateElementInterface | CountriesFormElementInterface | PasswordElementInterface;
export default function FormElementGenerator(props: GenericFormElementInterface): JSX.Element;
