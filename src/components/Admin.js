import React from "react";
import { Helmet } from "react-helmet";
import Header from './Main/Header'
import SideBar from './Admin/SideBar'

class Admin extends React.Component {



 render() {
  return (
    <div>
      <Helmet>
        <title>CovidTrack &bull; Admin</title>
      </Helmet>
      <div>
       <Header />
      </div>
      
      <SideBar />
    </div>
  );
 } 
};

export default Admin;
