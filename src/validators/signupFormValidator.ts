//Validators
import passwordValidator from "../helpers/validatePassword.helper";
import emailValidator from "../helpers/validateEmail.helper";

//Interfaces
import { ISignupFormError } from "../types/SignupForm";

function signupFormValidator(
	password: string,
	email: string,
	name: string,
	confirmPassword: string
): { anyError: boolean; issues: ISignupFormError } {
	var issues: ISignupFormError = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	var anyError = false;

	if (name.length === 0) {
		anyError = true;
		issues["name"] = "Name is required";
	}
	if (!emailValidator(email)) {
		anyError = true;

		issues["email"] = "Email is invalid";
	}
	const passwordResult = passwordValidator(password, confirmPassword);
	if (!passwordResult.success && passwordResult.message) {
		anyError = true;

		if (passwordResult.errorField === "password") {
			issues["password"] = passwordResult.message;
		} else {
			issues["confirmPassword"] = passwordResult.message;
		}
	}
	return { anyError, issues };
}
export default signupFormValidator;
