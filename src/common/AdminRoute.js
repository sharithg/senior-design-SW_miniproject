import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import { db } from "../base";
import Loader from "./Loader";
import NotFound from "./NotFound";

const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const [adminUsers, setAdminUsers] = useState([]);

  const retriveAdmins = () => {
    var admins = [];
    db.collection("admins")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          admins.push(doc.data().email);
        });
        setAdminUsers(admins);
      });
  };
  useEffect(() => {
    retriveAdmins();
  }, []);

  console.log(adminUsers);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!currentUser) return <Redirect to="/login" />;
        if (adminUsers === undefined || adminUsers.length === 0)
          return <Loader />;
        else if (adminUsers.includes(currentUser.email))
          return <RouteComponent {...routeProps} adminUsers={adminUsers} />;
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
