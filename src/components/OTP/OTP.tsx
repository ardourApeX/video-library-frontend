//React
import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import { useState } from "react";
import style from "./OTP.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useSnackbar } from "../../contexts/snackbar.context";
import SecurityIcon from "@mui/icons-material/Security";
import OTPInput from "otp-input-react";
import verifyOTP from "../../helpers/OTP/verifyOTP";
import requestOTP from "../../helpers/OTP/requestOTP";
//MUI Components
import * as mui from "@mui/material";

export default function OTP(props: { email: string }): JSX.Element {
	//This function is to manage states from parent and child component validations
	const [OTP, setOTP] = useState<string>("");
	const [timer, setTimer] = useState(60);
	const [disableResend, setDisableResend] = useState(true);
	const navigate = useNavigate();
	const { snackbarDispatch } = useSnackbar();
	let otpComp = useRef(null);

	async function handleClick() {
		const result = await verifyOTP(props.email, OTP, snackbarDispatch);
		if (result.success) {
			navigate("/");
		} else {
			setOTP("");
		}
	}

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

	useEffect(() => {
		TweenMax.from(otpComp, 0.5, {
			y: 200,
			opacity: 0,
		});
		TweenMax.to(otpComp, 0.7, {
			y: 0,
			opacity: 1,
			ease: Power3.easeIn,
		});
	}, []);

	return (
		<mui.Container
			ref={(elem) => {
				otpComp = elem;
			}}
			className={style.otpCard}
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

				<mui.Box sx={{ mt: 3 }}>
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
						onClick={handleClick}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 1 }}
					>
						Verify
					</mui.Button>
					<mui.Button
						disabled={disableResend}
						onClick={() => {
							setTimer(60);
							requestOTP(props.email, snackbarDispatch);
						}}
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
