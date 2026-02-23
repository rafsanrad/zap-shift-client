import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../pages/Shared/Loader/Loader";
import Forbidden from "../components/Forbidden/Forbidden";

const RiderRoute = ({ children }) => {
  const { loading ,user} = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || !user || roleLoading) {
    <Loader></Loader>;
  }
  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default RiderRoute;
