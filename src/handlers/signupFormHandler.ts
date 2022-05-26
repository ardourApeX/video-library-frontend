import { ISignupFormError } from "../types/SignupForm";
import { signupFormValidator } from "../validators/signupFormValidator";

function signupFormHandler(callback: Function): Function {
	return async function (
		event: React.FormEvent<HTMLFormElement>,
		setError: React.Dispatch<React.SetStateAction<ISignupFormError>>
	) {
		event.preventDefault();
		const data = new FormData(event!.currentTarget);

		//Making sure these are strings
		const password = `${data.get("password")}`;
		const confirmPassword = `${data.get("confirmPassword")}`;
		const name = `${data.get("name")}`;
		const email = `${data.get("email")}`;

		//Validating the form
		const result = signupFormValidator(password, email, name, confirmPassword);
		if (result.anyError) {
			setError(result.issues);
		} else {
			setError({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
			//TODO: Call the API
			callback();
		}
	};
}
export { signupFormHandler };
