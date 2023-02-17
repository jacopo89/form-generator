import { jsx as _jsx } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { FormDescriptor } from "../../../form-descriptor/FormDescriptor";
export default function EmbeddedFormField({ accessor, nestedForm, initialValues }) {
    const { setFieldValue, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElement = getNestedValue(accessor, values);
    // @ts-ignore
    const embeddedElement = elements.find(element => element.accessor === accessor);
    // @ts-ignore
    const nestedElements = embeddedElement.formElements;
    const formDescriptor = new FormDescriptor({ elements: nestedElements, initialValues });
    if (embeddedElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsx("div", { children: _jsx(Row, Object.assign({ className: "mb-3" }, { children: _jsx(Col, Object.assign({ xs: 12 }, { children: _jsx(FormGeneratorContextProvider, { formValue: formValue, formDescriptor: formDescriptor, existingValue: existingElement, accessorRoot: accessor, onChange: (value) => setFieldValue(accessor, value), children: nestedForm !== null && nestedForm !== void 0 ? nestedForm : undefined }) })) })) });
}
