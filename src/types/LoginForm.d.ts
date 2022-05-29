interface ILoginDetails {
	email: string;
	password: string;
}
interface ILoginCallback {
	(
		event: React.FormEvent<HTMLFormElement>,
		setFieldErrors: React.Dispatch<React.SetStateAction<ILoginDetails>>,
		snackbarDispatch: Function
	): Promise<void>;
}
export { ILoginDetails, ILoginCallback };
