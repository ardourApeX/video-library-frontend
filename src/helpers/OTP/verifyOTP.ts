import axios from "axios";
import { AxiosError } from "axios";
import { api } from "../../services/axios/axios";
import { IServerError, IServerResponse } from "../../types/global";
export default async function verifyOTP(
	email: string,
	otp: string,
	snackbarDispatch: Function
): Promise<IServerResponse | IServerError> {
	try {
		const serverResponse = await api.post<IServerResponse>("/user/verifyOTP", {
			email,
			otp: parseInt(otp),
		});
		snackbarDispatch({
			type: "OPEN",
			payload: {
				message: serverResponse.data.message,
				severity: serverResponse.data.success ? "success" : "error",
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
