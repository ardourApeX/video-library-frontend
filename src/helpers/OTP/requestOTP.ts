import { api } from "../../services/axios/axios";
import { AxiosError } from "axios";
import { IServerError, IServerResponse } from "../../types/global";
import axios from "axios";
export default async function requestOTP(
	email: string,
	snackbarDispatch: Function
): Promise<IServerResponse | IServerError> {
	try {
		const serverResponse = await api.get<IServerResponse>(
			"/user/requestOtp?email=" + email
		);
		snackbarDispatch({
			type: "OPEN",
			payload: {
				message: serverResponse.data.message,
				severity: "success",
				duration: 2000,
			},
		});
		return serverResponse.data;
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
		snackbarDispatch({
			type: "OPEN",
			payload: {
				message: "Something went wrong",
				severity: "error",
			},
		});
		return { success: false, message: "Something went wrong" };
	}
}
