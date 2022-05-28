import { Navigate } from "react-router-dom";

function PrivateRoute({ ...props }: JSX.Element) {
	const isLoggedIn = false;
	if (isLoggedIn) {
		return props;
	} else {
		return <Navigate to="/login" replace={true} />;
	}
}
export { PrivateRoute };
