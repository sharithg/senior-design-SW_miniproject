import React from "react";
import { Helmet } from "react-helmet";
import Header from './Main/Header'

const Admin = () => {
  return (
    <div>
      <Helmet>
        <title>CovidTrack &bull; Admin</title>
      </Helmet>
      <Header />
      <h1>Hello admin</h1>
    </div>
  );
};

export default Admin;
