import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";

const CCLogout = () => {
  const { logoutUser } = useAppContext();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Loading />;
};

export default CCLogout;
