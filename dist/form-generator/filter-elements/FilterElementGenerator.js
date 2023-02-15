import { jsx as _jsx } from "react/jsx-runtime";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFilterElementGenerator from "./bootstrap/BootstrapFilterElementGenerator";
export default function FilterElementGenerator(props) {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return _jsx("div", {});
        }
        case "bootstrap": {
            return _jsx(BootstrapFilterElementGenerator, Object.assign({}, props));
        }
    }
}
