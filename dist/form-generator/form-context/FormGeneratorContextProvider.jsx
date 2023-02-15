import { useFormik } from "formik";
import React, { useCallback, useEffect } from "react";
import FormGeneratorContext from "./FormGeneratorContext";
import { isArrayElementAccessor } from "../form-elements/utils/form-generator-utils";
export default function FormGeneratorContextProvider({ formValue, disable = false, elements, validationSchema, initialValues, onSubmit, children, existingValue, existingErrors, accessorRoot, onChange }) {
    const onSubmitHandler = (values) => {
        if (onSubmit) {
            const onSubmitResponse = onSubmit(values);
            if (onSubmitResponse instanceof Promise) {
                return onSubmitResponse.catch((error) => {
                    if (error.response.status === 400) {
                        //const response = GenericResponse.fromResponse(error.response)
                        setErrors(error.response);
                    }
                    throw error;
                });
            }
            return onSubmitResponse;
        }
        return new Promise(() => { });
    };
    const formik = useFormik({ initialValues, validationSchema, onSubmit: onSubmitHandler });
    const { handleSubmit, setValues, values, touched, errors, setFieldValue, setErrors, setTouched, submitForm, isValid, isValidating, isSubmitting } = formik;
    const updateValues = useCallback(() => {
        if (existingValue && existingValue !== values) {
            setValues(existingValue);
        }
    }, [existingValue, values]);
    const updateWhenValuesChange = useCallback(() => {
        if (accessorRoot && values !== initialValues) {
            if (values !== existingValue) {
                onChange(values);
            }
        }
    }, [values, existingValue, accessorRoot, initialValues]);
    useEffect(() => {
        updateWhenValuesChange();
    }, [values]);
    useEffect(() => {
        updateValues();
    }, [existingValue]);
    /*const updateErrors = useCallback(()=>{
        if(existingErrors && existingErrors !== errors) {
            setErrors(existingErrors)
        }
    },[existingErrors,errors])

    const updateTouched = useCallback(()=>{
        if(existingErrors && existingErrors !== errors){
            const keys = Object.keys(existingErrors);
            let touched = {}
            keys.forEach(key => {// @ts-ignore
                touched[key] = true})
            setTouched(touched)
        }
    },[existingErrors,errors])*/
    /*useEffect(()=>{
        updateErrors()
        updateTouched()
    },[existingErrors])*/
    /*useEffect(()=>{console.log("values",values)},[values])
    useEffect(()=>{console.log("values",errors)},[errors])
*/
    const formContent = (onSubmit) ? <form noValidate onSubmit={handleSubmit}>{children}</form> : children;
    const unsetFieldValue = (accessor) => {
        if (isArrayElementAccessor(accessor)) {
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if (arrayAccessorStartingPosition !== -1) {
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1, -1));
                const collectionAccessor = accessor.slice(0, arrayAccessorStartingPosition);
                const array = values[collectionAccessor];
                const newArray = array.filter((item, index) => index !== indexToRemove);
                const newValues = values;
                newValues[collectionAccessor] = newArray;
                setValues(newValues);
            }
        }
        else {
            const newValues = values;
            delete newValues[accessor];
            setValues(newValues);
        }
    };
    return <FormGeneratorContext.Provider value={{ formValue: values, disable, values, errors, touched, setFieldValue, unsetFieldValue, elements, submitForm, accessorRoot, isValid, isValidating, isSubmitting }}>
        {formContent}
    </FormGeneratorContext.Provider>;
}
