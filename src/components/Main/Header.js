import React, { useContext } from "react";
import { app } from "../../base";
import { AuthContext } from "../../Auth";
import { makeStyles } from '@material-ui/core/styles'

import NotFound from "../../common/NotFound";
import { AppBar, IconButton, Toolbar, Button, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
   
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Home() { 
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  var admins = app.database().ref("admins/");
  admins.on("value", function (snapshot) {
    console.log(snapshot.val());
  });

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {currentUser.email}
          </Typography>
          <Button onClick = {() => app.auth().signOut()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ); 
}
