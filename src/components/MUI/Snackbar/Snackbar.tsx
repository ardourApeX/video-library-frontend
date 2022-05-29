import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useSnackbar } from "../../../contexts/snackbar.context";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
	const { snackbarState, snackbarDispatch } = useSnackbar();
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Button
				variant="outlined"
				onClick={() =>
					snackbarDispatch({
						type: "OPEN",
						payload: {
							message: "This is a success message!",
							severity: "success",
						},
					})
				}
			>
				Open success snackbar
			</Button>
			<Snackbar
				open={snackbarState.open}
				autoHideDuration={snackbarState.duration}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={() => snackbarDispatch({ type: "CLOSE" })}
			>
				<Alert
					onClose={() => snackbarDispatch({ type: "CLOSE" })}
					severity={snackbarState.severity}
					sx={{ width: "100%" }}
				>
					{snackbarState.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
