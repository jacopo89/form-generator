import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// @ts-ignore
import ReactTags from "react-tag-autocomplete";
export default function TagsFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const [tags, setTags] = useState([]);
    const onTagDelete = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
        setFieldValue(newTags.map(newKeyword => newKeyword.name));
    };
    useEffect(() => {
        const formTags = values[accessor].map((element) => { return { name: element }; });
        if (values && formTags !== tags) {
            setTags(formTags);
        }
    }, [values]);
    const onTagAddition = (tag) => {
        const newTags = [...tags, tag];
        setTags(() => {
            return newTags;
        });
        setFieldValue(newTags.map(newKeyword => newKeyword.name));
    };
    return _jsx("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: _jsx(ReactTags, { minQueryLength: 0, tags: tags, allowNew: true, onDelete: onTagDelete, onAddition: onTagAddition, placeholderText: Header }) }));
}
