import React, { Component } from "react";
import HeroImage from "../../img/coronavirus.png";
import Stats from "./Stats";
import "./Hero.css";
import { Typography } from "@material-ui/core";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-box">
        <Typography className="hero-text" variant="h2">
          Covid 19 has gone around the globe
        </Typography>
        <div className="stats-box">
          <Stats stats={this.props.stats} />
        </div>
        <div className="img-box">
          <img
            className="corona-img"
            src={HeroImage}
            alt="Coronavirus imageeee"
          />
        </div>
        <Typography className="sub-text" variant="h5">
          #WearAMask
        </Typography>
      </div>
    );
  }
}
