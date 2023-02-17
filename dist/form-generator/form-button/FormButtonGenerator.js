import { jsx as _jsx } from "react/jsx-runtime";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import MaterialuiButton from "./materialui/MaterialuiButton";
import BootstrapButton from "./bootstrap/BootstrapButton";
export default function FormButtonGenerator() {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return _jsx(MaterialuiButton, {});
        }
        case "bootstrap": {
            return _jsx(BootstrapButton, {});
        }
    }
}
