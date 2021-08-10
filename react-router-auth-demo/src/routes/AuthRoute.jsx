import { Route, Redirect } from 'react-router-dom';

const AuthRoute = (props) => {
	const { path, component, redirect, role, userInfo } = props;
  
  if(userInfo.role && userInfo.role.indexOf(role) > -1) {
    return <Route path={path} render={(p) => component({...props, ...p})} />;
  }

	return <Redirect to={redirect} />;
};

export default AuthRoute;
