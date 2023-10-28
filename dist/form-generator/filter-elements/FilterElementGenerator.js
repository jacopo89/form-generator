import { jsx as _jsx } from "react/jsx-runtime";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFilterElementGenerator from "./bootstrap/BootstrapFilterElementGenerator";
import MaterialFilterElementGenerator from "./materialui/MaterialFilterElementGenerator";
export default function FilterElementGenerator(props) {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return _jsx(MaterialFilterElementGenerator, Object.assign({}, props), void 0);
        }
        case "bootstrap": {
            return _jsx(BootstrapFilterElementGenerator, Object.assign({}, props), void 0);
        }
    }
}
