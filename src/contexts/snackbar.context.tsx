import { createContext, useContext, useReducer } from "react";
interface ISnackbarContext {
	open: boolean;
	message: string;
	severity: string;
	duration: number;
}
interface ISnackbarAction {
	type: string;
	message: string;
	duration: 6000;
}
const initialState = {
	open: false,
	message: "",
	severity: "success",
	duration: 6000,
};
const SnackbarContext = createContext({});

function snackbarReducer(state: ISnackbarContext, action: ISnackbarAction) {
	return state;
}

export function SnackbarProvider({ children }: any) {
	const [snackbarState, snackbarDispatch] = useReducer(
		snackbarReducer,
		initialState
	);
	return (
		<SnackbarContext.Provider value={{ snackbarState, snackbarDispatch }}>
			{children}
		</SnackbarContext.Provider>
	);
}
export function useSnackbar() {
	const context = useContext(SnackbarContext);
	return context;
}
