import React from "react";
import app from "../base";

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Logout</button>
    </React.Fragment>
  );
}
