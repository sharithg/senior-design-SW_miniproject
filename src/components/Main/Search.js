import { Typography } from "@material-ui/core";
import React from "react";
import "./Search.css";

export default function Search({ country, term }) {
  console.log(country);

  if (country[0] === undefined) {
    return (
      <div className="container">
        <div className="stat-info">
          <Typography className="item" variant="h4">{`Country: `}</Typography>
          <Typography className="item" variant="h5">{`Date: `}</Typography>
          <Typography className="item" variant="h5">{`New Cases: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Cases: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Deaths: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Recovered: `}</Typography>
        </div>
      </div>
    );
  }
  if (country[0] === "null") {
    return (
      <div className="container">
        <div className="stat-info">
          <Typography className="item" variant="h5" color="error">
            No country found
          </Typography>
          <Typography className="item" variant="h4">{`Country: `}</Typography>
          <Typography className="item" variant="h5">{`Date: `}</Typography>
          <Typography className="item" variant="h5">{`New Cases: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Cases: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Deaths: `}</Typography>
          <Typography
            className="item"
            variant="h5"
          >{`Total Recovered: `}</Typography>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="stat-info">
        <Typography
          className="item"
          variant="h4"
        >{`Country: ${country[0].Country}`}</Typography>
        <Typography className="item" variant="h5">{`Date: ${
          new Date().getMonth() + 1
        }/${new Date().getDate()}/${new Date().getFullYear()}`}</Typography>
        <Typography
          className="item"
          variant="h5"
        >{`New Cases: ${country[0].NewConfirmed}`}</Typography>
        <Typography
          className="item"
          variant="h5"
        >{`Total Cases: ${country[0].TotalConfirmed}`}</Typography>
        <Typography
          className="item"
          variant="h5"
        >{`Total Deaths: ${country[0].TotalDeaths}`}</Typography>
        <Typography
          className="item"
          variant="h5"
        >{`Total Recovered: ${country[0].TotalRecovered}`}</Typography>
      </div>
    </div>
  );
}
