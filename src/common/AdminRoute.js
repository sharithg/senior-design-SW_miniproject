import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import { app } from "../base";
import Loader from "./Loader";
import NotFound from "./NotFound";

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
        if (!currentUser) return <Redirect to="/login" />;
        if (adminUsers === undefined || adminUsers.length === 0)
          return <Loader />;
        else if (adminUsers.includes(currentUser.email))
          return <RouteComponent {...routeProps} />;
        else
          return (
            <NotFound
              error_code={403}
              error_message={"Sorry, you do not have access to this page"}
            />
          );
      }}
    />
  );
};

export default AdminRoute;
