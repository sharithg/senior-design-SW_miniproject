import React, { useContext } from "react";
import { app } from "../base";
import { AuthContext } from "../Auth";
import NotFound from "../common/NotFound";
import { Helmet } from "react-helmet";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <React.Fragment>
      <Helmet>
        <title>CovidTrack &bull; Home</title>
      </Helmet>
      <h1>{currentUser.email}</h1>
      <button onClick={() => app.auth().signOut()}>Logout</button>
    </React.Fragment>
  );
}
