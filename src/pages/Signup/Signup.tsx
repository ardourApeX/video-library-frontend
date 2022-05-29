import { ReactElement } from "react";
import SignupForm from "../../components/MUI/SignupForm/SignupForm";
import { signupFormHandler } from "../../handlers/signupFormHandler";
import signupRequest from "../../helpers/Signup/signupRequest";
import { ISignupCallback } from "../../types/SignupForm";

export default function SignUp(): ReactElement {
	//Creating a closure to handle the form submission
	const handleSubmit: ISignupCallback = signupFormHandler(signupRequest);

	return (
		<>
			<SignupForm handleSubmit={handleSubmit} />
		</>
	);
}
