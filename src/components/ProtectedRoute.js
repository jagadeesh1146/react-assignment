import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../common/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);

  //  Wait until auth is checked
  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
