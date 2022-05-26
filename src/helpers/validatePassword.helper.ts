//Constants
import passwordRegex from "../constants/passwordRegex";

function passwordValidators(
	password: string,
	confirmPassword?: string
): {
	success: boolean;
	message?: string;
	errorField?: string;
} {
	// Match regex expression with password
	// Also match confirmPassword if it exists
	if (passwordRegex.test(password)) {
		if (confirmPassword) {
			if (confirmPassword === password) {
				return { success: true };
			} else {
				return {
					success: false,
					message: "Passwords do not match",
					errorField: "confirmPassword",
				};
			}
		}

		return { success: true };
	}
	return {
		success: false,
		message:
			"Password must be at least 8 characters long, contain at least one number, one uppercase letter, one lowercase letter, and one special character",
		errorField: "password",
	};
}
export default passwordValidators;
