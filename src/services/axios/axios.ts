import axios from "axios";
const baseURL = process.env.REACT_APP_DEVELOPMENT_URL;
export const api = axios.create({
	baseURL: baseURL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	withCredentials: false,
	timeout: 2000,
	cancelToken: axios.CancelToken.source().token,
});
