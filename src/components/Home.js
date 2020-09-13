import React, { Component } from 'react';
import Header from './Main/Header';
import Hero from './Main/Hero';
import Stats from './Main/Stats';

import axios from 'axios';

export default class Home extends Component {

  state = {
    stats: [],
    counter: 0
  }

 async componentDidMount() {
    const results = await axios.get('https://api.covid19api.com/summary');

    this.setState({stats: results.data.Countries}) 
    console.log(this.state.stats)
  }
  
  render() {
    return (
      <div>
        <Header />
        <Hero stats = {this.state.stats} />
      </div>
    )
  }
}
 