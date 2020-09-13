import React, { Component } from 'react';
import HeroImage from '../../img/coronavirus.png';
import Stats from './Stats'
import './Hero.css';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "hero-box">
        <div className = "stats-box">
        <Stats stats={this.props.stats} />
        </div>
        <div className ='img-box'> 
          <img className = "corona-img" src = {HeroImage} alt = "Coronavirus imageeee" />
        </div>
      </div>
    )
  }
}          
