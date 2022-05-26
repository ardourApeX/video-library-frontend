interface ISignupDetails {
	name: string;
	email: string;
	password: string;
}

interface ISignupFormError {
	password: string;
	email: string;
	name: string;
	confirmPassword: string;
}
export { ISignupDetails, IPasswordStatus, ISignupFormError };
