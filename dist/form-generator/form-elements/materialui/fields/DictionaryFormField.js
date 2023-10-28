import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Grid } from "@mui/material";
import FormElement from "../../FormElement";
import useDictionary from "../../hooks/useDictionary";
export default function DictionaryFormField({ accessor, initialValues }) {
    const { adder, collectionElement, nestedElements, remover, getFormGeneratorProvider } = useDictionary({ accessor: accessor, initialValues: initialValues });
    const nestedForms = nestedElements.map((element, index) => {
        return (_jsxs(Grid, Object.assign({ container: true, className: "mb-3" }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: _jsx(Button, Object.assign({ onClick: () => remover(index) }, { children: _jsx(DeleteIcon, {}, void 0) }), void 0) }), void 0), _jsxs(Grid, Object.assign({ item: true, xs: 11 }, { children: [getFormGeneratorProvider(index, _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "key" }, void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "type" }, void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "value" }, void 0) }), void 0)] }), void 0)), _jsx(Divider, { light: true }, void 0)] }), void 0)] }), index));
    });
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsxs("div", { children: [nestedForms, _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); adder(); } }, { children: "Add" }), void 0)] }, void 0);
}
