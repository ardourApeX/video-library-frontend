import { ReactElement } from "react";
import LoginForm from "../../components/MUI/LoginForm/LoginForm";
import { loginFormHandler } from "../../handlers/loginFormHandler";
import { useSnackbar } from "../../contexts/snackbar.context";
function apiCall() {
	console.log("Yes api call has been invoked");
}

export default function Login(): JSX.Element {
	//Creating a closure to handle the form submission
	const { snackbarDispatch } = useSnackbar();

	const handleSubmit = loginFormHandler(apiCall);

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
