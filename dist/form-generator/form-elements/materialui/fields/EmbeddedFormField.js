import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { Divider, Grid } from "@mui/material";
export default function EmbeddedFormField({ accessor, nestedForm, initialValues }) {
    const { setFieldValue, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor, values);
    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor === accessor);
    // @ts-ignore
    const nestedElements = embeddedElement.formElements;
    const nestedForms = useMemo(() => {
        return (_jsx(Grid, Object.assign({ container: true, className: "mb-3" }, { children: _jsxs(Grid, Object.assign({ item: true, xs: 12 }, { children: [_jsx(FormGeneratorContextProvider, Object.assign({ formValue: formValue, elements: nestedElements, initialValues: initialValues, existingValue: existingElement, accessorRoot: accessorRoot, onChange: (value) => {
                            console.log("accessor when saving embedded", accessor);
                            return setFieldValue(accessor, value);
                        } }, { children: nestedForm(1) })), _jsx(Divider, { light: true })] })) })));
    }, [existingElement, accessor, initialValues]);
    if (embeddedElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsx("div", { children: nestedForms });
}
