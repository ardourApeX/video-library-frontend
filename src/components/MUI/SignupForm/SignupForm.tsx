//React
import { ReactElement, useState } from "react";

//MUI Components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSnackbar } from "../../../contexts/snackbar.context";
import {
	ISignupFormError,
	ISignupCallback,
	ISignupDetails,
} from "../../../types/SignupForm";

interface IProps {
	handleSubmit: (
		event: React.FormEvent<HTMLFormElement>,
		setFieldErrors: React.Dispatch<React.SetStateAction<ISignupFormError>>,
		snackbarDispatch: Function
	) => void;
}
//TODO :
//1. Change href for credits
function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Video Library
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignupForm(props: IProps): ReactElement {
	const [fieldErrors, setFieldErrors] = useState<ISignupFormError>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [passwordVisibilty, setPasswordVisibility] = useState(false);
	const { handleSubmit } = props;
	const { snackbarDispatch } = useSnackbar();
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
							handleSubmit(event, setFieldErrors, snackbarDispatch)
						}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									error={fieldErrors.name.length > 0}
									helperText={fieldErrors.name}
									required
									fullWidth
									id="name"
									label="Name"
									name="name"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={fieldErrors.email.length > 0}
									helperText={fieldErrors.email}
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={fieldErrors.password.length > 0}
									helperText={fieldErrors.password}
									required
									fullWidth
									name="password"
									label="Password"
									type={passwordVisibilty ? "text" : "password"}
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={fieldErrors.confirmPassword.length > 0}
									helperText={fieldErrors.confirmPassword}
									required
									fullWidth
									name="confirmPassword"
									label="Confirm Password"
									type={passwordVisibilty ? "text" : "password"}
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid style={{ textAlign: "left" }} item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											onChange={() => setPasswordVisibility(!passwordVisibilty)}
											value="allowExtraEmails"
											color="primary"
										/>
									}
									label="Show Password"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
