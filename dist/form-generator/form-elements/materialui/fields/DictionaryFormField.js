import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Grid } from "@mui/material";
import FormElement from "../../FormElement";
import useDictionary from "../../hooks/useDictionary";
export default function DictionaryFormField({ accessor, initialValues }) {
    const { adder, collectionElement, nestedElements, remover, getFormGeneratorProvider } = useDictionary({ accessor: accessor, initialValues: initialValues });
    const nestedForms = nestedElements.map((element, index) => {
        return (_jsxs(Grid, Object.assign({ container: true, className: "mb-3" }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: _jsx(Button, Object.assign({ onClick: () => remover(index) }, { children: _jsx(DeleteIcon, {}) })) })), _jsxs(Grid, Object.assign({ item: true, xs: 11 }, { children: [getFormGeneratorProvider(index, _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "key" }) })), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "type" }) })), _jsx(Grid, Object.assign({ item: true, xs: 4 }, { children: _jsx(FormElement, { accessor: "value" }) }))] }))), _jsx(Divider, { light: true })] }))] }), index));
    });
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor });
    return _jsxs("div", { children: [nestedForms, _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); adder(); } }, { children: "Add" }))] });
}
