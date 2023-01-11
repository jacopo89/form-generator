import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface PasswordElementInterface extends BasicFormElementInterface {
    type: "password";
}
export default function PasswordFormField(props: PasswordElementInterface): JSX.Element;
