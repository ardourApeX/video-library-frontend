import emailRegex from "../constants/emailRegex";

function emailValidator(email: string): boolean {
	// Match regex expression with email
	if (emailRegex.test(email)) {
		return true;
	}
	return false;
}
export default emailValidator;
