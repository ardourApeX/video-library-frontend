import SignUp from "./Signup/Signup";
import Login from "./Login/Login";
import { ReactElement } from "react";

interface IPublicRoutes {
	path: string;
	element: ReactElement;
}
const publicRoutes: Array<IPublicRoutes> = [
	{
		path: "/signup",
		element: SignUp(),
	},
	{
		path: "/login",
		element: Login(),
	},
];

export default publicRoutes;
