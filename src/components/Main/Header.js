/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { app, rdb } from "../../base";
import { AuthContext } from "../../Auth";
import { makeStyles } from "@material-ui/core/styles";
import { formatDate } from "../../common/formatDate";
import Loader from "../../common/Loader";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import Logo from "../../img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "#fbfbfb",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#000",
    margin: "auto",
  },
  textColor: {
    color: "#000",
    marginRight: "1rem",
  },
  imgSize: {
    height: "2rem",
  },
}));

export default function Header({ counter }) {
  const [status, setStatus] = useState("");
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();

  useEffect(() => {
    var today = formatDate(new Date());
    var ref = rdb.ref(`responses/${today}`);
    ref.on(
      "value",
      function (snapshot) {
        if (snapshot.val()) {
          console.log(today);
          setStatus(
            snapshot.val()[currentUser.uid].num_symptoms > 2
              ? "Time to get checked"
              : "Cleared"
          );
        } else setStatus("Please complete form");
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, []);

  if (status === "") return <Loader />;

  return (
    <React.Fragment>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <div className={classes.root}>
            <a href="/">
              <img className={classes.imgSize} src={Logo} alt="Logo image" />
            </a>
          </div>

          <Typography variant="body1" className={classes.title}>
            Your current Covid status is: {status}
          </Typography>

          <Typography variant="body1" className={classes.textColor}>
            Logged in as:{" "}
            {currentUser.email.substring(0, currentUser.email.indexOf("@"))}
          </Typography>
          <Button
            className={classes.textColor}
            onClick={() => app.auth().signOut()}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
