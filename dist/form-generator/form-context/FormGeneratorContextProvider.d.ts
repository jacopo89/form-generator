import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { GenericElementInterface } from "../ElementInterface";
declare type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>;
} | {
    accessorRoot?: never;
    onSubmit?: (values: any) => void | Promise<any>;
    onChange?: never;
};
declare type CommonProps = {
    elements: GenericElementInterface[];
    validationSchema?: any;
    initialValues: FormikValues;
    children?: any;
    existingValue?: FormikValues;
    existingErrors?: FormikErrors<FormikValues> | undefined;
    existingTouched?: FormikTouched<FormikValues> | undefined;
    formValue?: FormikValues | undefined;
    disable?: boolean;
};
declare type Props = CommonProps & ConditionalProps;
export default function FormGeneratorContextProvider({ formValue, disable, elements, validationSchema, initialValues, onSubmit, children, existingValue, existingErrors, accessorRoot, onChange }: Props): JSX.Element;
export {};
