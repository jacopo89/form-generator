import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { Grid } from "@mui/material";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";
export default function EmbeddedFormField({ accessor, nestedForm, initialValues }) {
    const { setFieldValue, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor, values);
    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor === accessor);
    // @ts-ignore
    const nestedElements = embeddedElement.formElements;
    const formDescriptor = new FormDescriptor({ elements: nestedElements, initialValues });
    const nestedForms = useMemo(() => {
        return (_jsx(Grid, Object.assign({ container: true, className: "mb-3" }, { children: _jsx(Grid, Object.assign({ item: true, xs: 12 }, { children: _jsx(FormGeneratorContextProvider, { formDescriptor: formDescriptor, children: nestedForm ? nestedForm(1) : undefined, formValue: formValue, existingValue: existingElement, accessorRoot: accessorRoot, onChange: (value) => setFieldValue(accessor, value) }, void 0) }), void 0) }), void 0));
    }, [existingElement, accessor, initialValues]);
    if (embeddedElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsx("div", { children: nestedForms }, void 0);
}
