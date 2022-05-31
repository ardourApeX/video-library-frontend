//React Dependenices & CSS
import React from "react";
import { ReactElement, useState, useRef, useEffect } from "react";
import style from "./loginForm.module.css";

//MUI Components & other Imports
import * as mui from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TweenMax, Power3 } from "gsap";
import { ILoginDetails } from "../../../types/LoginForm";
import loginFormValidator from "../../../validators/LoginFormValidator";

export default function LoginForm(props: {
	setUserDetails: React.Dispatch<
		React.SetStateAction<ILoginDetails | undefined>
	>;
}): ReactElement {
	const [fieldErrors, setFieldErrors] = useState<ILoginDetails>({
		email: "",
		password: "",
	});
	const [passwordVisibilty, setPasswordVisibility] = useState(false);
	let loginComp = useRef(null);
	const { setUserDetails } = props;

	function handleClick(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const data = new FormData(event!.currentTarget);
		//Making sure these are strings
		const password = `${data.get("password")}`;
		const email = `${data.get("email")}`;
		const validationResult = loginFormValidator(password, email);
		if (validationResult.anyError) {
			setFieldErrors(validationResult.issues);
		} else {
			setFieldErrors({
				email: "",
				password: "",
			});
			setUserDetails({
				email,
				password,
			});
		}
	}
	useEffect(() => {
		TweenMax.from(loginComp, 0.5, {
			y: 200,
			opacity: 0,
		});
		TweenMax.to(loginComp, 0.7, {
			y: 120,
			opacity: 1,
			ease: Power3.easeIn,
		});
	}, []);

	return (
		<mui.Container
			className={style.loginCard}
			ref={(elem) => {
				loginComp = elem;
			}}
			component="main"
			maxWidth="xs"
		>
			<mui.CssBaseline />
			<mui.Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<mui.Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</mui.Avatar>
				<mui.Typography component="h1" variant="h5">
					Login
				</mui.Typography>
				<mui.Box
					component="form"
					noValidate
					onSubmit={handleClick}
					sx={{ mt: 3 }}
				>
					<mui.Grid container spacing={2}>
						<mui.Grid item xs={12}>
							<mui.TextField
								error={fieldErrors.email.length > 0}
								helperText={fieldErrors.email}
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</mui.Grid>
						<mui.Grid item xs={12}>
							<mui.TextField
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
						</mui.Grid>
						<mui.Grid style={{ textAlign: "left" }} item xs={12}>
							<mui.FormControlLabel
								control={
									<mui.Checkbox
										onChange={() => setPasswordVisibility(!passwordVisibilty)}
										value="allowExtraEmails"
										color="primary"
									/>
								}
								label="Show Password"
							/>
						</mui.Grid>
					</mui.Grid>
					<mui.Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</mui.Button>
					<mui.Grid container justifyContent="flex-end">
						<mui.Grid item>
							<mui.Link href="/signup" variant="body2">
								Don't have an account? Sign Up
							</mui.Link>
						</mui.Grid>
					</mui.Grid>
				</mui.Box>
			</mui.Box>

			<mui.Typography
				sx={{ mt: 5 }}
				variant="body2"
				color="text.secondary"
				align="center"
			>
				{"Copyright © "}
				<mui.Link color="inherit" href="https://github.com/ardourApeX">
					Joy Gupta
				</mui.Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</mui.Typography>
		</mui.Container>
	);
}
