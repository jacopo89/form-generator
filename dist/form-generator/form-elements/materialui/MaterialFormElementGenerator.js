import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import TextFormField from "./fields/TextFormField";
import NumberFormField from "./fields/NumberFormField";
import SelectFormField from "./fields/SelectFormField";
import RadioFormField from "./fields/RadioFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import SwitchFormField from "./fields/SwitchFormField";
import CollectionFormField from "./fields/CollectionFormField";
import EmbeddedFormField from "./fields/EmbeddedFormField";
import DictionaryFormField from "./fields/DictionaryFormField";
import WYSIWYGFormField from "./fields/WYSIWYGFormField";
import PriceFormField from "../bootstrap/fields/PriceFormField";
export default function MaterialFormElementGenerator(props) {
    const { type } = props;
    switch (type) {
        case "text":
            return _jsx(TextFormField, Object.assign({}, props));
        case "number":
            return _jsx(NumberFormField, Object.assign({}, props));
        case "select":
            return _jsx(SelectFormField, Object.assign({}, props));
        case "radio":
            return _jsx(RadioFormField, Object.assign({}, props));
        case "checkbox":
            return _jsx(CheckboxFormField, Object.assign({}, props));
        case "switch":
            return _jsx(SwitchFormField, Object.assign({}, props));
        case "collection":
            return _jsx(CollectionFormField, Object.assign({}, props));
        case "embedded":
            return _jsx(EmbeddedFormField, Object.assign({}, props));
        case "dictionary":
            return _jsx(DictionaryFormField, Object.assign({}, props));
        case "wysiwyg":
            return _jsx(WYSIWYGFormField, Object.assign({}, props));
        case "price":
            return _jsx(PriceFormField, Object.assign({}, props));
    }
    return _jsx(_Fragment, {});
}
