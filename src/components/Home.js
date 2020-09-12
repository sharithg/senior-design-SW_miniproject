import React, { useContext } from "react";
import { app } from "../base";
import { AuthContext } from "../Auth";
import NotFound from "../common/NotFound";
export default function Home() {
  const { currentUser } = useContext(AuthContext);

  var admins = app.database().ref("admins/");
  admins.on("value", function (snapshot) {
    console.log(snapshot.val());
  });

  return (
    <React.Fragment>
      <h1>{currentUser.email}</h1>
      <button onClick={() => app.auth().signOut()}>Logout</button>
    </React.Fragment>
  );
}
