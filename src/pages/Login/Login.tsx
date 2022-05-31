//Components and Types
import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "../../components/MUI/LoginForm/LoginForm";
import { useSnackbar } from "../../contexts/snackbar.context";

//Interface and Helper
import loginRequest from "../../helpers/Login/loginRequest";
import { ILoginDetails } from "../../types/LoginForm";

export default function Login(): JSX.Element {
	//Creating a closure to handle the form submission
	const [userDetails, setUserDetails] = useState<ILoginDetails | undefined>(
		undefined
	);
	const { snackbarDispatch } = useSnackbar();
	useEffect(() => {
		async function makeAPICall() {
			if (userDetails) {
				//To be further implemented
				const response = await loginRequest(userDetails, snackbarDispatch);
			}
		}
		makeAPICall();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userDetails]);
	return <LoginForm setUserDetails={setUserDetails} />;
}
