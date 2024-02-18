import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import LoadingPage from "./Loading";

export const CCProtect = ({ children }) => {
  const { cc, ccLoading } = useAppContext();
  console.log(ccLoading);

  if (ccLoading) return <LoadingPage />;
  if (!cc) {
    return <Navigate to="/cc" />;
  }
  return children;
};
