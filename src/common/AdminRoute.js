import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import { app } from "../base";
import Loader from "./Loader";
const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const [adminUsers, setAdminUsers] = useState([]);

  const retriveAdmins = () => {
    app
      .database()
      .ref("admins/")
      .on("value", function (snapshot) {
        const admins = snapshot.val();
        const adminArr = [];
        if (snapshot && snapshot.exists()) {
          Object.keys(admins).forEach((key) => {
            adminArr.push(admins[key].email);
          });
          setAdminUsers(adminArr);
        }
      });
  };
  useEffect(() => {
    retriveAdmins();
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (adminUsers === undefined || adminUsers.length === 0)
          return <Loader />;
        else if (adminUsers.includes(currentUser.email))
          return <RouteComponent {...routeProps} />;
        else return <h1>You do not have permission</h1>;
      }}
    />
  );
};

export default AdminRoute;
