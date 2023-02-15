/// <reference types="react" />
export default function useFormGeneratorThemeContext(): {
    theme: import("./FormGeneratorThemeContext").FormGeneratorTheme;
    setTheme: import("react").Dispatch<import("react").SetStateAction<import("./FormGeneratorThemeContext").FormGeneratorTheme>>;
};
