import React, { useContext } from "react";
import { app } from "../base";
import { AuthContext } from "../Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <React.Fragment>
      <h1>{currentUser.displayName}</h1>
      <button onClick={() => app.auth().signOut()}>Logout</button>
    </React.Fragment>
  );
}
