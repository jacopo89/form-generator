import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { getNestedValue } from "../../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, Grid } from "@mui/material";
export default function CollectionFormField({ accessor, nestedForm, buttonLabel = "Aggiungi", initialValues, lockList = false }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
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
            return (_jsxs(Grid, Object.assign({ container: true, className: "mb-3" }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: (!disable && !lockList) ? _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: _jsx(DeleteIcon, {}) })) : _jsx("div", { children: index + 1 }) })), _jsxs(Grid, Object.assign({ item: true, xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, Object.assign({ disable: disable, formValue: formValue, elements: nestedElements, initialValues: initialValues, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value) }, { children: nestedForm(index) }), index), _jsx(Divider, { light: true })] }))] })));
        });
    }, [existingElements, accessor, initialValues]);
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsxs("div", { children: [nestedForms, (!disable && !lockList) && _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }, { children: buttonLabel }))] });
}
