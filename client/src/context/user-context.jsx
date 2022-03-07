import { useEffect,useState,createContext } from "react";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.jwtToken) {
        const token = localStorage.getItem("jwtToken");
        setAuthToken(token);
        const decoded = jwt_decode(token);
        setIsAuthenticated(true);
        setUser(decoded);
        setIsLoggedIn(true);
    }
    }, []);
  const handleLogin = (user) => {
    setUser(user);
    setIsAuthenticated(true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setUser({});
    setIsAuthenticated(false);
    setIsLoggedIn(false);
  };
  const handleRegister = (user) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
