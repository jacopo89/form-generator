import React from "react";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFilterElementGenerator from "./bootstrap/BootstrapFilterElementGenerator";
export default function FilterElementGenerator(props) {
    const theme = useFormGeneratorThemeContext();
    switch (theme.theme) {
        case "material-ui": {
            return <div></div>;
        }
        case "bootstrap": {
            return <BootstrapFilterElementGenerator {...props}/>;
        }
    }
}
