import { ReactElement, useState, useEffect } from "react";
import SignupForm from "../../components/MUI/SignupForm/SignupForm";
import signupRequest from "../../helpers/Signup/signupRequest";
import { useSnackbar } from "../../contexts/snackbar.context";
import { ISignupDetails } from "../../types/SignupForm";
export default function SignUp(): ReactElement {
	const [signupDetails, setSignupDetails] = useState<
		ISignupDetails | undefined
	>(undefined);
	const [isSignupSuccess, setIsSignupSuccess] = useState(false);
	const { snackbarDispatch } = useSnackbar();
	useEffect(() => {
		async function makeAPICall() {
			if (signupDetails) {
				const response = await signupRequest(signupDetails, snackbarDispatch);
				if (response.success) {
					setIsSignupSuccess(true);
				}
			}
		}
		makeAPICall();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [signupDetails]);
	return (
		<div className="parent-page">
			{!isSignupSuccess && <SignupForm setSignupDetails={setSignupDetails} />}
		</div>
	);
}
