import SignUp from "./Signup/Signup";
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
];

export default publicRoutes;
