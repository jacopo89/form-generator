import React from "react";

type FormGeneratorTheme = "material-ui" | "bootstrap"

const formGeneratorThemeValue: FormGeneratorTheme = "material-ui"
const FormGeneratorThemeContext = React.createContext<FormGeneratorTheme>(formGeneratorThemeValue)

export default FormGeneratorThemeContext
