import { ILoginDetails } from "../../types/LoginForm";
import { api } from "../../services/axios/axios";

export default async function loginRequest(
	data: ILoginDetails,
	snackbarDispatch: Function
) {
	console.log("Yes api call has been invoked with data: ", data);

	snackbarDispatch({
		type: "OPEN",
		payload: {
			message: "This is a success message!",
			severity: "success",
			duration: 2000,
		},
	});
}
