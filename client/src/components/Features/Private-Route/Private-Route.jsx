import {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context.jsx";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
