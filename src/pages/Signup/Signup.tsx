import { ReactElement } from "react";
import SignupForm from "../../components/MUI/SignupForm/SignupForm";
import { signupFormHandler } from "../../handlers/signupFormHandler";
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

export default function SignUp(): ReactElement {
	const { snackbarDispatch } = useSnackbar();
	//Creating a closure to handle the form submission
	const handleSubmit = signupFormHandler(() => apiCall(snackbarDispatch));

	return (
		<>
			<SignupForm handleSubmit={handleSubmit} />
		</>
	);
}
