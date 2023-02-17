import * as Yup from "yup";
export class FormDescriptor {
    constructor({ elements, validationSchema = Yup.object().shape({}), initialValues }) {
        this.initialValues = initialValues;
        this.elements = elements;
        this.validationSchema = validationSchema;
    }
    addElement(element, initialValue, validationRule) {
        if (element.type === "collection" || element.type === "embedded") {
            this.elements.push(Object.assign(Object.assign({}, element), { initialValues: initialValue }));
        }
        else {
            this.elements.push(element);
        }
        this.initialValues = Object.assign(Object.assign({}, this.initialValues), { [element.accessor]: initialValue });
        if (validationRule)
            this.validationSchema.shape({ [element.accessor]: validationRule });
    }
}
