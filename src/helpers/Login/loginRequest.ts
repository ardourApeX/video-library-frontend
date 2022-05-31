import { ILoginDetails } from "../../types/LoginForm";
import { IServerError, IServerResponse } from "../../types/global";
import axios from "axios";
import { AxiosError } from "axios";

export default async function loginRequest(
	data: ILoginDetails,
	snackbarDispatch: Function
): Promise<IServerResponse | IServerError> {
	try {
		axios.defaults.withCredentials = true;
		const response = await axios.post<IServerResponse | IServerError>(
			"http://localhost:3001/v1/user/login",
			data
		);
		snackbarDispatch({
			type: "OPEN",
			payload: {
				message: response.data.message,
				severity: "success",
				duration: 2000,
			},
		});
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError<IServerResponse>;
			snackbarDispatch({
				type: "OPEN",
				payload: {
					message: serverError!.response!.data.message,
					severity: "error",
				},
			});
			return serverError.response!.data;
		}
		return { success: false, message: "Something went wrong" };
	}
}
