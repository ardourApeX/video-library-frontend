import publicRoutes from "../components/index";
import { Route, Routes } from "react-router-dom";
import { ReactElement } from "react";

interface IRoute {
	path: String;
	element: ReactElement;
}
function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			{publicRoutes.map((route: IRoute) => {
				return <Route {...route} />;
			})}
		</Routes>
	);
}
export default PublicRoutes;
