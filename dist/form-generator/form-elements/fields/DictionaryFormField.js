import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Row } from "react-bootstrap";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import { getNestedValue } from "../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import FormElement from "../FormElement";
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
    const existingElements = getNestedValue(accessor, values);
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    // @ts-ignore
    const nestedElements = getNestedValue(accessor, values).map((value) => {
        return nestedBasicElements.map(nested => {
            var _a;
            if (nested.accessor === "value") {
                nested.type = (_a = value["type"]) !== null && _a !== void 0 ? _a : "text";
                return nested;
            }
            return nested;
        });
    });
    const nestedForms = useMemo(() => {
        return existingElements.map((element, index) => {
            const indexAccessor = `${accessor}[${index}]`;
            return (_jsxs(Row, Object.assign({ className: "mb-3" }, { children: [_jsx(Col, Object.assign({ xs: 1 }, { children: _jsx(Button, Object.assign({ className: "btn-sm p-1 rounded-circle bg-danger", onClick: () => unsetFieldValue(indexAccessor) }, { children: _jsx(DeleteIcon, {}) })) })), _jsxs(Col, Object.assign({ xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, Object.assign({ disable: disable, formValue: formValue, elements: nestedElements[index], initialValues: initialValues, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value) }, { children: _jsxs(Row, { children: [_jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "key" }) })), _jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "type" }) })), _jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "value" }) }))] }) }), index), _jsx(Divider, { light: true })] }))] })));
        });
    }, [existingElements, accessor, initialValues]);
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsxs("div", { children: [nestedForms, _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }, { children: "Add" }))] });
}
