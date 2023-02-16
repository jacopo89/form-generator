import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Row } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { getNestedValue } from "../../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from "@mui/material";
export default function CollectionFormField({ accessor, nestedForm, addButton: addButtonProps, removeButton: removeButtonProps, initialValues, lockList = false }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
    const addButton = (!disable && !lockList) && ((addButtonProps) ? React.cloneElement(addButtonProps, { onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }) : _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }, { children: _jsx(AddIcon, {}) })));
    const removeButton = (indexAccessor) => {
        return (!disable && !lockList) && ((removeButtonProps) ? React.cloneElement(removeButtonProps, { onClick: () => unsetFieldValue(indexAccessor) }) : _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: _jsx(DeleteIcon, {}) })));
    };
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    // @ts-ignore
    const nestedElements = collectionElement.formElements;
    const nestedForms = useMemo(() => {
        return existingElements.map((element, index) => {
            const indexAccessor = `${accessor}[${index}]`;
            return (_jsxs(Row, Object.assign({ className: "mb-3" }, { children: [_jsx(Col, Object.assign({ xs: 1, className: "d-flex justify-content-center align-items-center" }, { children: removeButton(indexAccessor) })), _jsxs(Col, Object.assign({ xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, { disable: disable, formValue: formValue, elements: nestedElements, initialValues: initialValues, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value), children: nestedForm ? nestedForm(index) : undefined }, index), _jsx(Divider, { light: true })] }))] }), index));
        });
    }, [existingElements, accessor, initialValues]);
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsxs("div", { children: [nestedForms, addButton] });
}
