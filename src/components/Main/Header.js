import React, { useContext } from "react";
import { app, db } from "../../base";
import { AuthContext } from "../../Auth";
import { makeStyles } from "@material-ui/core/styles";

import NotFound from "../../common/NotFound";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";
import Logo from "../../img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#000",
  },
  textColor: {
    color: "#000",
    marginRight: "1rem",
  },
  imgSize: {
    height: "2rem",
  },
}));

export default function Header() {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  db.collection("admins")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
    });
  return (
    <React.Fragment>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <div className = {classes.root}>
            <a href = "/" >
              <img className={classes.imgSize} src={Logo} alt="Logo image" />
            </a>
          </div>
          <Typography variant="body1" className={classes.title}>
            Your current Covid status is:
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
