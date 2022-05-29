import { createContext, useReducer, useContext } from "react";
interface IInitalState {
	open: boolean;
	message: string;
	severity: "success" | "info" | "warning" | "error";
	duration: number;
}
interface IAction {
	type: string;
	payload: any;
}
const initialState: IInitalState = {
	open: false,
	message: "",
	severity: "success",
	duration: 6000,
};

const SnackbarContext = createContext<{
	snackbarState: IInitalState;
	snackbarDispatch: Function;
}>({
	snackbarState: initialState,
	snackbarDispatch: snackbarReducer,
});
export function snackbarReducer(state: IInitalState, action: IAction) {
	switch (action.type) {
		case "OPEN":
			return {
				...state,
				open: true,
				message: action.payload.message,
				severity: action.payload.severity,
			};
		case "CLOSE":
			return {
				...state,
				...initialState,
			};

		default:
			return state;
	}
}
export function SnackbarProvider(props: any) {
	const [snackbarState, snackbarDispatch] = useReducer(
		snackbarReducer,
		initialState
	);
	return (
		<SnackbarContext.Provider value={{ snackbarState, snackbarDispatch }}>
			{props.children}
		</SnackbarContext.Provider>
	);
}
export function useSnackbar() {
	return useContext(SnackbarContext);
}
