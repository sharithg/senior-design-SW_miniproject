import React from "react";
import { Helmet } from "react-helmet";
import Header from './Main/Header'
import PeopleList from './Admin/PeopleList';
import Counter from './Admin/Counter';

import './Admin.css'

class Admin extends React.Component {

 state = {
   people: [{
     email: "Fred",
     formFilled: false,
     hasSymptoms: false,
   },
   {
    email: "Emily",
    formFilled: false,
    hasSymptoms: true,
  },{
    email: "Iker@bu.edu",
    formFilled: true,
    hasSymptoms: false,
  },{
    email: "John",
    formFilled: false,
    hasSymptoms: true,
  },{
    email: "Alexa",
    formFilled: true,
    hasSymptoms: true, 
  },{
    email: "Sofia",
    formFilled: true,
    hasSymptoms: false,
  },{
    email: "Carolina",
    formFilled: false,
    hasSymptoms: true,
  },],
  counter: 0
 }

 componentDidMount () {
  let counter1 = 0;
  let counter2 = 0;
  this.state.people.map(person => {
    if (person.hasSymptoms) {
      counter1++
    }
    counter2++
  });
  this.setState({counter: counter1/counter2});
 } 

 render() {
  return (
    <div >
      <Helmet>
        <title>CovidTrack &bull; Admin</title>
      </Helmet>
      <div>
       <Header />
      </div>
      <PeopleList people = {this.state.people}/>
      <Counter counter = {this.state.counter} />
    </div>
  );
 } 
};

export default Admin;
