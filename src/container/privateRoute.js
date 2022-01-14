import React from 'react';  
import { Navigate, Route, useLocation, } from 'react-router-dom';
import { checkCookie } from '../utils/cookies';

// const PrivateRoute = ({ component: Component, ...rest }) => (  
//   <Route { ...rest } render={props => (
//     checkCookie() !== null ? (
//       <Component { ...props } />
//     ) : (
//       <Navigate to={{
//           pathname: '/',
//           state: { from: props.location }
//         }}
//       />
//     )
//   )} />
// );


const PrivateRoute = ({ children }) => {
	const location = useLocation();

	if (checkCookie() == null) {
		return <Navigate to='/' state={{ from: location }} />;
	}

  return children;
}

export default PrivateRoute;