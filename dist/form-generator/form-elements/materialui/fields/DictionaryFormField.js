import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Grid, Button } from "@mui/material";
import FormElement from "../../FormElement";
import { FormDescriptor } from "../../../form-descriptor/FormDescriptor";
const nestedBasicElements = [
    {
        Header: "Key",
        type: "text",
        accessor: "key"
    },
    {
        Header: "Type",
        type: "select",
        accessor: "type",
        options: [
            { label: "Text", value: "text" },
            { label: "Number", value: "number" },
        ],
    },
    {
        Header: "Value",
        type: "text",
        accessor: "value",
    }
];
export default function DictionaryFormField({ accessor, initialValues }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = useMemo(() => getNestedValue(accessor, values), [accessor, values]);
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    const nestedElements = useMemo(() => {
        // @ts-ignore
        const finalElements = existingElements.map((value, index) => {
            return nestedBasicElements.map(nested => {
                var _a;
                if (nested.accessor === "value") {
                    const newNested = Object.assign({}, nested);
                    newNested.type = (_a = value["type"]) !== null && _a !== void 0 ? _a : "text";
                    return newNested;
                }
                return nested;
            });
        });
        return finalElements;
    }, [existingElements]);
    const nestedForms = useMemo(() => {
        return existingElements.map((element, index) => {
            const formDescriptor = new FormDescriptor({ elements: nestedElements[index], initialValues });
            const indexAccessor = `${accessor}[${index}]`;
            return (_jsxs(Grid, Object.assign({ container: true, className: "mb-3" }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: _jsx(DeleteIcon, {}) })) })), _jsxs(Grid, Object.assign({ item: true, xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, Object.assign({ formDescriptor: formDescriptor, disable: disable, formValue: formValue, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value) }, { children: _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "key" }) })), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "type" }) })), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "value" }) }))] })) })), _jsx(Divider, { light: true })] }))] }), index));
        });
    }, [existingElements, accessor, initialValues, nestedElements]);
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsxs("div", { children: [nestedForms, _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, {}); } }, { children: "Add" }))] });
}
