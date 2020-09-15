import React, { Component } from "react";
import Header from "./Main/Header";
import Hero from "./Main/Hero";
import Tracker from "./Main/Tracker";
import Search from './Main/Search';
import SearchBar from './Main/SearchBar';

import axios from "axios";

export default class Home extends Component {
  state = {
    stats: [],
    counter: 0,
    symptoms: [],
    country: []
    
  };

  async componentDidMount() {
    const results = await axios.get("https://api.covid19api.com/summary");

    this.setState({ stats: results.data.Countries });
  }

  counterCheck = (checked) => {
    let count = 0;
    checked.map((element) => {
      if (element) { 
        count += 1
      }
    })
    this.setState({ counter: count})
  }

  onTermSubmit = (term) => {
    this.setState({country: this.state.stats.filter((el) => {
      return el.Slug === term.toLowerCase()
    })})
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
        <Tracker counterCheck = {this.counterCheck} checked = {this.state.checked} getStyles = {this.getStyles} onCheckboxChange = {this.onCheckboxChange} /> 
        <div style = {{width: '80vw', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <SearchBar onTermSubmit = {this.onTermSubmit} />
          <Search country = {this.state.country}/> 
        </div>
        
      </div>
    );
  }
}
