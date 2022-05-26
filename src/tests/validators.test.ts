import emailValidator from "../helpers/validateEmail.helper";
import passwordValidator from "../helpers/validatePassword.helper";

//Actual Testing of Validators
test("Testing Email Validator", () => {
	expect(emailValidator("testingemail@website.com")).toBe(true);
	expect(emailValidator("testingemail@website")).toBe(false);
});
test("Testing Password Validator", () => {
	expect(passwordValidator("Password@123", "Password@123")).toStrictEqual({
		success: true,
	});
	expect(passwordValidator("Password@123", "Pass")).toStrictEqual({
		success: false,
		message: "Passwords do not match",
		errorField: "confirmPassword",
	});
	expect(passwordValidator("Password@123")).toStrictEqual({ success: true });
	expect(passwordValidator("Password123", "Password@123")).toStrictEqual({
		success: false,
		message:
			"Password must be at least 8 characters long, contain at least one number, one uppercase letter, one lowercase letter, and one special character",
		errorField: "password",
	});
});
