/* eslint-disable */
import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Main/Header";
import PeopleList from "./Admin/PeopleList";
import { formatDate } from "../common/formatDate";
import { rdb } from "../base";

import "./Admin.css";

class Admin extends React.Component {
  state = {
    people: [
      {
        email: "Fred",
        formFilled: false,
        hasSymptoms: false,
      },
      {
        email: "Emily",
        formFilled: false,
        hasSymptoms: true,
      },
      {
        email: "Iker@bu.edu",
        formFilled: true,
        hasSymptoms: false,
      },
      {
        email: "John",
        formFilled: false,
        hasSymptoms: true,
      },
      {
        email: "Alexa",
        formFilled: true,
        hasSymptoms: true,
      },
      {
        email: "Sofia",
        formFilled: true,
        hasSymptoms: false,
      },
      {
        email: "Carolina",
        formFilled: false,
        hasSymptoms: true,
      },
    ],
    users: null,
    responseUsers: null,
    counter: 0,
  };

  componentDidMount() {
    //calling firebase
    var d = new Date();
    var today = formatDate(d);
    console.log(today);
    var userRef = rdb.ref("users");
    var responseRef = rdb.ref(`responses/${today}`);
    userRef.on(
      "value",
      function (snapshot) {
        this.setState({ users: snapshot.val() });
      }.bind(this),
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
    responseRef.on(
      "value",
      function (snapshot) {
        this.setState({ responseUsers: snapshot.val() });
      }.bind(this),
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );

    // Number of people
    let counter1 = 0;
    let counter2 = 0;
    this.state.people.map((person) => {
      if (person.hasSymptoms) {
        counter1++;
      }
      counter2++;
    });
    this.setState({ counter: counter1 / counter2 });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>CovidTrack &bull; Admin</title>
        </Helmet>
        <div>
          <Header />
        </div>
        <PeopleList
          users={this.state.users}
          responseUsers={this.state.responseUsers}
        />
      </div>
    );
  }
}

export default Admin;
