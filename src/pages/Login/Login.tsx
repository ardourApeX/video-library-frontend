//Components and Types
import React from "react";
import LoginForm from "../../components/MUI/LoginForm/LoginForm";
import { ILoginCallback } from "../../types/LoginForm";

//Handlers and Helpers
import { loginFormHandler } from "../../handlers/loginFormHandler";
import loginRequest from "../../helpers/Login/loginRequest";

export default function Login(): JSX.Element {
	//Creating a closure to handle the form submission
	const handleSubmit: ILoginCallback = loginFormHandler(loginRequest);

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
