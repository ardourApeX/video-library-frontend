const passwordRegex =
	// eslint-disable-next-line no-useless-escape
	/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
export default passwordRegex;
