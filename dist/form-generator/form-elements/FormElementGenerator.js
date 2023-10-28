import { jsx as _jsx } from "react/jsx-runtime";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFormElementGenerator from "./bootstrap/BootstrapFormElementGenerator";
import MaterialFormElementGenerator from "./materialui/MaterialFormElementGenerator";
export default function FormElementGenerator(props) {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return _jsx(MaterialFormElementGenerator, Object.assign({}, props), void 0);
        }
        case "bootstrap": {
            return _jsx(BootstrapFormElementGenerator, Object.assign({}, props), void 0);
        }
    }
}
