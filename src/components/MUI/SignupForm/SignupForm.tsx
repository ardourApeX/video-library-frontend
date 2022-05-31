//React
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import style from "./signupForm.module.css";
import { TweenMax, Power3 } from "gsap";
//MUI Components
import * as mui from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//Validator and Interfaces
import { ISignupDetails, ISignupFormError } from "../../../types/SignupForm";
import signupFormValidator from "../../../validators/signupFormValidator";

interface IProps {
	setSignupDetails: React.Dispatch<
		React.SetStateAction<ISignupDetails | undefined>
	>;
}

export default function SignupForm(props: IProps): JSX.Element {
	const [fieldErrors, setFieldErrors] = useState<ISignupFormError>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [passwordVisibilty, setPasswordVisibility] = useState(false);
	const { setSignupDetails } = props;
	let signupComp = useRef(null);

	//This function is to manage states from parent and child component validations
	function handleClick(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const data = new FormData(event!.currentTarget);
		//Making sure these are strings
		const password = `${data.get("password")}`;
		const confirmPassword = `${data.get("confirmPassword")}`;
		const name = `${data.get("name")}`;
		const email = `${data.get("email")}`;

		const validationResult = signupFormValidator(
			password,
			email,
			name,
			confirmPassword
		);
		if (validationResult.anyError) {
			setFieldErrors(validationResult.issues);
		} else {
			setSignupDetails({
				name,
				email,
				password,
			});
		}
	}

	useEffect(() => {
		TweenMax.from(signupComp, 0.5, {
			y: 200,
			opacity: 0,
		});
		TweenMax.to(signupComp, 0.7, {
			y: 0,
			opacity: 1,
			ease: Power3.easeIn,
		});
	}, []);

	return (
		<mui.Container
			ref={(el) => {
				signupComp = el;
			}}
			className={style.signupCard}
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
					Sign up
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
								error={fieldErrors.name.length > 0}
								helperText={fieldErrors.name}
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								autoComplete="family-name"
							/>
						</mui.Grid>
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
						<mui.Grid item xs={12}>
							<mui.TextField
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
						Sign Up
					</mui.Button>
					<mui.Grid container justifyContent="flex-end">
						<mui.Grid item>
							<mui.Link href="/login" variant="body2">
								Already have an account? Sign in
							</mui.Link>
						</mui.Grid>
					</mui.Grid>
				</mui.Box>
			</mui.Box>
			<mui.Typography
				variant="body2"
				color="text.secondary"
				sx={{ mt: 5 }}
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
