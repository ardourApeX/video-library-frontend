import LoginForm from "../../components/MUI/LoginForm/LoginForm";
import { loginFormHandler } from "../../handlers/loginFormHandler";
import { useSnackbar } from "../../contexts/snackbar.context";
function apiCall(snackbarDispatch: Function) {
	console.log("Yes api call has been invoked");
	snackbarDispatch({
		type: "OPEN",
		payload: {
			message: "This is a success message!",
			severity: "success",
			duration: 2000,
		},
	});
}

export default function Login(): JSX.Element {
	//Creating a closure to handle the form submission
	const { snackbarDispatch } = useSnackbar();

	const handleSubmit = loginFormHandler(() => apiCall(snackbarDispatch));

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
