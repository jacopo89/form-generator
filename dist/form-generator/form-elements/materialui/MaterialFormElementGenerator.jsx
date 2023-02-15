import React from "react";
import TextFormField from "./fields/TextFormField";
import NumberFormField from "./fields/NumberFormField";
import SelectFormField from "./fields/SelectFormField";
import RadioFormField from "./fields/RadioFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import SwitchFormField from "./fields/SwitchFormField";
export default function MaterialFormElementGenerator(props) {
    const { type } = props;
    switch (type) {
        case "text":
            return <TextFormField {...props}/>;
        case "number":
            return <NumberFormField {...props}/>;
        case "select":
            return <SelectFormField {...props}/>;
        case "radio":
            return <RadioFormField {...props}/>;
        case "checkbox":
            return <CheckboxFormField {...props}/>;
        case "switch":
            return <SwitchFormField {...props}/>;
    }
    return <></>;
}
