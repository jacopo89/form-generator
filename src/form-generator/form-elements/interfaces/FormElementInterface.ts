import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface FormElementInterface extends BasicFormElementInterface{
    type:"form",
    initialValues: any,
    validationSchema:any,
}
