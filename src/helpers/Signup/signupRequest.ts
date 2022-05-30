//Modules and instances
import axios, { AxiosError } from "axios";
import { api } from "../../services/axios/axios";

//Interfaces
import { ISignupDetails } from "../../types/SignupForm";
import { IServerResponse } from "../../types/global";

export default async function signupRequest(
	data: ISignupDetails,
	snackbarDispatch: Function
): Promise<
	| IServerResponse
	| {
			success: boolean;
			message: string;
	  }
> {
	try {
		const response = await api.put<IServerResponse>("/user/signup", data);
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
