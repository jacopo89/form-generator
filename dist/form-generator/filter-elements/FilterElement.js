import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { getAccessorElementsNoIndex } from "../form-elements/utils/form-generator-utils";
import FilterElementGenerator from "./FilterElementGenerator";
import FilterGeneratorContext from "../filter-context/FilterGeneratorContext";
function getElement(elements, accessorParsed) {
    let element = null;
    let haystack = elements;
    accessorParsed.forEach((accessor) => {
        if (haystack === undefined)
            return;
        if (Array.isArray(haystack)) {
            const piece = haystack.find(formElement => formElement.accessor === accessor);
            // @ts-ignore
            haystack = piece === null || piece === void 0 ? void 0 : piece.formElements;
            element = piece;
        }
    });
    return element;
}
export default function FilterElement({ accessor, nestedForm }) {
    const { values, errors, touched, setFieldValue, elements, accessorRoot } = useContext(FilterGeneratorContext);
    const accessorParsed = getAccessorElementsNoIndex(accessor);
    const element = getElement(elements, accessorParsed);
    const finalAccessor = accessor;
    if (element) {
        // @ts-ignore
        return _jsx(FilterElementGenerator, Object.assign({ nestedForm: nestedForm }, element, { accessorRoot: accessorRoot, type: element.type, values: values, errors: errors, touched: touched, setFieldValue: (value) => setFieldValue(finalAccessor, value), Header: element.Header, accessor: finalAccessor }));
    }
    return _jsx("div", { children: accessor });
}
