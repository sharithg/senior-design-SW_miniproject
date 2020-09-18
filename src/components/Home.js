/* eslint-disable */
import React, { Component } from "react";
import Header from "./Main/Header";
import Hero from "./Main/Hero";
import Tracker from "./Main/Tracker";
import Search from "./Main/Search";
import SearchBar from "./Main/SearchBar";
import Helmet from "react-helmet";
import { db } from "../base";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "orange",
  },
});
import axios from "axios";

class Home extends Component {
  state = {
    stats: [],
    counter: 0,
    symptoms: [],
    country: [],
    admins: [],
  };

  async componentDidMount() {
    var admins = [];
    db.collection("admins")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          admins.push(doc.data().email);
        });

        this.setState({ admins: admins });
        console.log(this.props.currentUser.email);
      });
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        if (res.data.Countries) {
          this.setState({ stats: res.data.Countries });
        }
      })
      .catch((err) => console.log(err));
  }

  counterCheck = (checked) => {
    let count = 0;
    checked.map((element) => {
      if (element) {
        count += 1;
      }
    });
    this.setState({ counter: count });
  };

  onTermSubmit = (term) => {
    this.setState({
      country: this.state.stats.filter((el) => {
        return el.Slug === term.toLowerCase();
      }),
    });
  };

  getStyles = () => {
    if (this.state.counter === 0) {
      return {
        color: "#343a40",
      };
    } else if (this.state.counter === 1) {
      return {
        color: "yellow",
        textShadow: "0 2px 1.3rem yellow",
      };
    } else {
      return {
        color: "red",
        textShadow: "0 2px 1.3rem red",
      };
    }
  };

  render() {
    const { classes } = this.props;
    const currnetUserEmail = this.props.currentUser.email;
    return (
      <div>
        <Helmet>
          <title>CovidTrack &bull; Home</title>
        </Helmet>
        <Header counter={this.state.counter} />
        {this.state.admins.includes(currnetUserEmail) ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6">
                  Welcome admin {currnetUserEmail.split("@")[0]}.{" "}
                  <a href="/admin">Go to admin page?</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <div />
        )}

        <Hero stats={this.state.stats} />
        <Tracker
          counterCheck={this.counterCheck}
          checked={this.state.checked}
          getStyles={this.getStyles}
          onCheckboxChange={this.onCheckboxChange}
        />
        <div
          style={{
            width: "80vw",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <Search country={this.state.country} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
