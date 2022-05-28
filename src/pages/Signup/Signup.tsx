import { ReactElement } from "react";
import SignupForm from "../../components/MUI/SignupForm/SignupForm";
import { signupFormHandler } from "../../handlers/signupFormHandler";

function apiCall() {
	console.log("Yes api call has been invoked");
}

export default function SignUp(): ReactElement {
	//Creating a closure to handle the form submission
	const handleSubmit = signupFormHandler(apiCall);

	return (
		<>
			<SignupForm handleSubmit={handleSubmit} />
		</>
	);
}
