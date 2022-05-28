import { ReactElement } from "react";
import LoginForm from "../../components/MUI/LoginForm/LoginForm";
import { loginFormHandler } from "../../handlers/loginFormHandler";

function apiCall() {
	console.log("Yes api call has been invoked");
}

export default function Login(): ReactElement {
	//Creating a closure to handle the form submission
	const handleSubmit = loginFormHandler(apiCall);

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
