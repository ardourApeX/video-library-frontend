import { ILoginDetails } from "../types/LoginForm";
import { loginFormValidator } from "../validators/LoginFormValidator";

function loginFormHandler(callback: Function): Function {
	return async function (
		event: React.FormEvent<HTMLFormElement>,
		setError: React.Dispatch<React.SetStateAction<ILoginDetails>>
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
			callback();
		}
	};
}
export { loginFormHandler };
