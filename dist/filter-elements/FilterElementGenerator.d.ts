/// <reference types="react" />
import { TextFilterElementInterface } from "./fields/TextFilterField";
import { CheckboxFilterElementInterface } from "./fields/CheckboxFilterField";
import { RadioFilterElementInterface } from "./fields/RadioFilterField";
import { SelectFilterElementInterface } from "./fields/SelectFilterField";
import { CountriesFilterElementInterface } from "./fields/CountriesFilterField";
export type GenericFormElementInterface = TextFilterElementInterface | CheckboxFilterElementInterface | RadioFilterElementInterface | SelectFilterElementInterface | CountriesFilterElementInterface;
export default function FilterElementGenerator(props: GenericFormElementInterface): JSX.Element;
