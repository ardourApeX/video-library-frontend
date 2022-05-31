//Validators
import passwordValidator from "../helpers/validatePassword.helper";
import emailValidator from "../helpers/validateEmail.helper";

//Interfaces
import { ILoginDetails } from "../types/LoginForm";

export default function loginFormValidator(
	password: string,
	email: string
): { anyError: boolean; issues: ILoginDetails } {
	var issues: ILoginDetails = {
		email: "",
		password: "",
	};
	var anyError = false;

	if (!emailValidator(email)) {
		anyError = true;

		issues["email"] = "Email is invalid";
	}
	const passwordResult = passwordValidator(password);
	if (!passwordResult.success && passwordResult.message) {
		anyError = true;
		issues["password"] = passwordResult.message;
	}
	return { anyError, issues };
}
export { loginFormValidator };
