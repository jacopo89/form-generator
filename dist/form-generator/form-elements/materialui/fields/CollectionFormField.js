import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { getNestedValue } from "../../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";
export default function CollectionFormField({ accessor, nestedForm, addButton: addButtonProps, removeButton: removeButtonProps, initialValues, lockList = false }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
    const addButton = (!disable && !lockList) && ((addButtonProps) ? React.cloneElement(addButtonProps, { onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }) : _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }, { children: _jsx(AddIcon, {}, void 0) }), void 0));
    const removeButton = (indexAccessor) => {
        return (!disable && !lockList) && ((removeButtonProps) ? React.cloneElement(removeButtonProps, { onClick: () => unsetFieldValue(indexAccessor) }) : _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: _jsx(DeleteIcon, {}, void 0) }), void 0));
    };
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    // @ts-ignore
    const nestedElements = collectionElement.formElements;
    const formDescriptor = new FormDescriptor({ elements: nestedElements, initialValues });
    const nestedForms = useMemo(() => {
        return existingElements.map((element, index) => {
            const indexAccessor = `${accessor}[${index}]`;
            return (_jsxs(Grid, Object.assign({ container: true, className: "mb-3" }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: removeButton(indexAccessor) }), void 0), _jsxs(Grid, Object.assign({ item: true, xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, { disable: disable, formValue: formValue, formDescriptor: formDescriptor, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value), children: nestedForm ? nestedForm(index) : undefined }, index), _jsx(Divider, { light: true }, void 0)] }), void 0)] }), void 0));
        });
    }, [existingElements, accessor, initialValues]);
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsxs("div", { children: [nestedForms, addButton] }, void 0);
}
