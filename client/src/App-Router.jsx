import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { UserContext } from "./context/user-context.jsx";
import HeaderComponent from "./components/Features/Header/Header";
import Footer from "./components/Features/Footer/Footer";
import PrivateRoute from "./components/Features/Private-Route/Private-Route";
import Students from "./components/pages/Students/Students";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

// Check for token to keep user logged in

function AppRouter() {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={isLoggedIn ? Students : Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/students" component={Students} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default AppRouter;
