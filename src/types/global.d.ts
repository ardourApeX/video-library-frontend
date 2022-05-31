interface IServerResponse {
	success: boolean;
	message: string;
	data: Array<any> | undefined;
}
interface IServerError {
	success: boolean;
	message: string;
}
export { IServerResponse, IServerError };
