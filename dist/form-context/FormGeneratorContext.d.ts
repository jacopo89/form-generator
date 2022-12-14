import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { GenericElementInterface } from "../ElementInterface";
import React from "react";
export interface FormContextInterface {
    values: FormikValues;
    formValue: FormikValues;
    errors: FormikErrors<FormikValues>;
    touched: FormikTouched<FormikValues>;
    setFieldValue: (name: string, value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>;
    unsetFieldValue: (accessor: string) => void;
    elements: GenericElementInterface[];
    submitForm: (e?: React.FormEvent<HTMLFormElement> | undefined) => Promise<any>;
    accessorRoot?: string;
    disable: boolean;
}
declare const FormGeneratorContext: React.Context<FormContextInterface>;
export default FormGeneratorContext;
