import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import React from "react";
import MaterialuiButton from "./materialui/MaterialuiButton";
import BootstrapButton from "./bootstrap/BootstrapButton";

export default function FormButtonGenerator(){
    const theme = useFormGeneratorThemeContext();
    switch(theme.theme){
        case "material-ui":{
            return <MaterialuiButton/>
        }
        case "bootstrap":{
            return <BootstrapButton/>
        }
    }
}
