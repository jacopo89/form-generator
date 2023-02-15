import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import Select from "react-select";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../utils/form-generator-utils";
export default function SelectFormField(element) {
    const { type, values, disable, errors, options, touched, setFieldValue, accessor, Header } = element;
    const [value, setValue] = useState(options.find(option => option.value === getNestedValue(accessor, values)));
    const updateSelectValue = useCallback(() => {
        if (options.find(option => option.value === getNestedValue(accessor, values)) !== value) {
            setValue(options.find(option => option.value === getNestedValue(accessor, values)));
        }
    }, [accessor, values, value]);
    useEffect(() => {
        updateSelectValue();
    }, [values]);
    return _jsxs(_Fragment, { children: [_jsx(Form.Label, { children: Header }), _jsx(Select, { isDisabled: disable, classNamePrefix: "react-select", options: options, value: value, onChange: (value) => setFieldValue(value === null || value === void 0 ? void 0 : value.value), placeholder: Header })] });
}
