//React
import React, { useEffect } from "react";
import { ReactElement, useState } from "react";
import style from "./OTP.module.css";
//MUI Components
import * as mui from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import OTPInput from "otp-input-react";

export default function OTP(props: { email: string }): JSX.Element {
	//This function is to manage states from parent and child component validations
	const [OTP, setOTP] = useState("");
	const [timer, setTimer] = useState(30);
	const [disableResend, setDisableResend] = useState(true);
	useEffect(() => {
		let timerRef;
		if (timer > 0) {
			timerRef = setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		} else {
			setDisableResend(false);
			clearInterval(timerRef);
		}
		return () => clearInterval(timerRef);
	}, [timer]);

	return (
		<mui.Container className={style.otpCard} component="main" maxWidth="xs">
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
					<SecurityIcon />
				</mui.Avatar>
				<mui.Typography
					maxWidth={"80%"}
					noWrap={true}
					textAlign={"center"}
					component="h6"
					variant="subtitle1"
				>
					Please verify your email
					<br />
					{props.email}
				</mui.Typography>
				<hr />

				<mui.Typography sx={{ mt: 3 }} component="h1" variant="subtitle2">
					Enter OTP sent to your email
				</mui.Typography>

				<mui.Box component="form" noValidate sx={{ mt: 3 }}>
					<mui.Grid container spacing={2}>
						<mui.Grid style={{ textAlign: "left" }} item xs={12}>
							<OTPInput
								value={OTP}
								onChange={setOTP}
								OTPLength={6}
								otpType="number"
								className={style.otp}
								separator={<span>.</span>}
								inputStyle={{
									backgroundColor: "none",
									height: "40px",
									width: "100%",
								}}
							/>
						</mui.Grid>
					</mui.Grid>
					{
						<mui.Typography
							sx={{ mt: 3, textAlign: "center" }}
							component="h1"
							variant="caption"
						>
							{timer === 0
								? "Request OTP now"
								: `Request new OTP after ${timer} seconds`}
						</mui.Typography>
					}
					<mui.Button
						disabled={OTP.length !== 6}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 1 }}
					>
						Verify
					</mui.Button>
					<mui.Button
						disabled={disableResend}
						type="submit"
						fullWidth
						variant="outlined"
						sx={{ mt: 1, mb: 2 }}
					>
						Resend
					</mui.Button>
				</mui.Box>
			</mui.Box>
		</mui.Container>
	);
}
