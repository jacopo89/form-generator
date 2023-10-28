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
import PriceFormField from "./fields/PriceFormField";
import PasswordFormField from "./fields/PasswordFormField";
import DateFormField from "./fields/DateFormField";
import TagsFormField from "./fields/TagsFormField";
export default function MaterialFormElementGenerator(props) {
    const { type } = props;
    switch (type) {
        case "text":
            return _jsx(TextFormField, Object.assign({}, props), void 0);
        case "password":
            return _jsx(PasswordFormField, Object.assign({}, props), void 0);
        case "number":
            return _jsx(NumberFormField, Object.assign({}, props), void 0);
        case "select":
            return _jsx(SelectFormField, Object.assign({}, props), void 0);
        case "radio":
            return _jsx(RadioFormField, Object.assign({}, props), void 0);
        case "checkbox":
            return _jsx(CheckboxFormField, Object.assign({}, props), void 0);
        case "switch":
            return _jsx(SwitchFormField, Object.assign({}, props), void 0);
        case "collection":
            return _jsx(CollectionFormField, Object.assign({}, props), void 0);
        case "embedded":
            return _jsx(EmbeddedFormField, Object.assign({}, props), void 0);
        case "dictionary":
            return _jsx(DictionaryFormField, Object.assign({}, props), void 0);
        case "wysiwyg":
            return _jsx(WYSIWYGFormField, Object.assign({}, props), void 0);
        case "price":
            return _jsx(PriceFormField, Object.assign({}, props), void 0);
        case "date":
            return _jsx(DateFormField, Object.assign({}, props), void 0);
        case "tags":
            return _jsx(TagsFormField, Object.assign({}, props), void 0);
    }
    return _jsx(_Fragment, {}, void 0);
}
