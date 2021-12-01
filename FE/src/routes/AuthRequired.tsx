import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router";
import Loading from "../screens/Loading";

const AuthRequired = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useSelector((state: any) => state.auth);
  if (auth?.authLoading) return <Loading />;
  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default AuthRequired;
