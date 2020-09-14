import React, { Component } from "react";
import Header from "./Main/Header";
import Hero from "./Main/Hero";
import Tracker from "./Main/Tracker";

import axios from "axios";

export default class Home extends Component {
  state = {
    stats: [],
    counter: 0,
    symptoms: [],
    checked: [false,false,false,false,false,false,false,false]
  };

  async componentDidMount() {
    const results = await axios.get("https://api.covid19api.com/summary");

    this.setState({ stats: results.data.Countries });
  }

  onCheckboxChange = (num) => {
    let check = [...this.state.checked];
    check[num] = !this.state.checked[num]   
    this.setState({checked: check}, () => {
      console.log(this.state.checked);
    });
    let count = 0;
    this.state.checked.map((element) => {
      if (element) { 
        count += 1
      }
    })
    this.setState({ counter: count}, () => {
      console.log(this.state.counter)
      })
    console.log(this.state.counter);
  }

  getStyles = () => {
    if (this.state.counter === 0) {
      return {
        color: '#343a40',
      } 
    } else if (this.state.counter === 1) {
      return {
        color: 'yellow',
        textShadow: '0 2px 1.3rem yellow'
      }
    } else {
      return {
        color: 'red',
        textShadow: '0 2px 1.3rem red' 
      } 
    }
  }

  render() {
    return (
      <div>
        <Header counter = {this.state.counter} />
        <Hero stats={this.state.stats} />
        <Tracker checked = {this.state.checked} getStyles = {this.getStyles} onCheckboxChange = {this.onCheckboxChange} /> 
      </div>
    );
  }
}
