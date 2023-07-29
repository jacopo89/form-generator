import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { getNestedValue } from "../../utils/form-generator-utils";
import { MenuItem, TextField } from "@mui/material";
export default function SelectFormField(element) {
    var _a;
    const { values, disable, errors, options, touched, setFieldValue, accessor, Header } = element;
    const [value, setValue] = useState(options.find(option => option.value === getNestedValue(accessor, values)));
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const updateSelectValue = useCallback(() => {
        if (values !== undefined) {
            if (options.find(option => option.value === getNestedValue(accessor, values)) !== value) {
                setValue(options.find(option => option.value === getNestedValue(accessor, values)));
            }
        }
    }, [accessor, values, value]);
    useEffect(() => {
        updateSelectValue();
    }, [values]);
    return _jsxs(_Fragment, { children: [_jsx("span", { children: Header }), _jsx(TextField, Object.assign({ disabled: disable, error: nestedTouched && nestedError !== undefined, fullWidth: true, helperText: nestedTouched ? (nestedError !== null && nestedError !== void 0 ? nestedError : "") : "", onChange: (e) => setFieldValue(e.target.value), select: true, value: (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : "", variant: "outlined" }, { children: options.map((option) => (_jsx(MenuItem, Object.assign({ value: option.value }, { children: option.label }), option.value))) }))] });
}
