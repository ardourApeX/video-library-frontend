//Types and Validators
import { ILoginDetails, ILoginCallback } from "../types/LoginForm";
import { loginFormValidator } from "../validators/LoginFormValidator";

function loginFormHandler(callback: Function): ILoginCallback {
	return async function (
		event: React.FormEvent<HTMLFormElement>,
		setError: React.Dispatch<React.SetStateAction<ILoginDetails>>,
		snackbarDispatch: Function
	) {
		event.preventDefault();
		const data = new FormData(event!.currentTarget);
		//Making sure these are strings
		const password = `${data.get("password")}`;
		const email = `${data.get("email")}`;

		//Validating the form
		const result = loginFormValidator(password, email);
		if (result.anyError) {
			setError(result.issues);
		} else {
			setError({
				email: "",
				password: "",
			});
			//TODO: Call the API
			callback({ email, password }, snackbarDispatch);
		}
	};
}
export { loginFormHandler };
