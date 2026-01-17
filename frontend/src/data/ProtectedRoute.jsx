import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../services/auth.api";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isLoggedIn();
      setIsAuth(result);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
