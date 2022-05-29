interface ISignupDetails {
	name: string;
	email: string;
	password: string;
}

interface ISignupFormError extends ISignupDetails {
	confirmPassword: string;
}
interface ISignupCallback {
	(
		event: React.FormEvent<HTMLFormElement>,
		setFieldErrors: React.Dispatch<React.SetStateAction<ISignupFormError>>,
		snackbarDispatch: Function
	): Promise<void>;
}
export { ISignupDetails, ISignupFormError, ISignupCallback };
