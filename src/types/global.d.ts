interface IServerResponse {
	success: number;
	message: string;
	data: Array<any> | undefined;
}
interface IServerError {
	success: number;
	message: string;
}
export { IServerResponse, IServerError };
