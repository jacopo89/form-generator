import React from "react";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFormElementGenerator from "./bootstrap/BootstrapFormElementGenerator";
import MaterialFormElementGenerator from "./materialui/MaterialFormElementGenerator";
export default function FormElementGenerator(props) {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return <MaterialFormElementGenerator {...props}/>;
        }
        case "bootstrap": {
            return <BootstrapFormElementGenerator {...props}/>;
        }
    }
}
