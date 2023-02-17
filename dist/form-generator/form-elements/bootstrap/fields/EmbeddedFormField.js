import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { Divider } from "@mui/material";
export default function EmbeddedFormField({ accessor, nestedForm, initialValues }) {
    const { setFieldValue, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor, values);
    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor === accessor);
    // @ts-ignore
    const nestedElements = embeddedElement.formElements;
    if (embeddedElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsx("div", { children: _jsx(Row, Object.assign({ className: "mb-3" }, { children: _jsxs(Col, Object.assign({ xs: 12 }, { children: [_jsx(FormGeneratorContextProvider, { formValue: formValue, elements: nestedElements, initialValues: initialValues, existingValue: existingElement, accessorRoot: accessor, onChange: (value) => setFieldValue(accessor, value), children: nestedForm !== null && nestedForm !== void 0 ? nestedForm : undefined }), _jsx(Divider, { light: true })] })) })) });
}
