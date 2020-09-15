import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import "./Tracker.css";
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@material-ui/core";

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "40vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  secondaryContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-7rem",
  },
  checkBox: {
    transform: "scale(2)",
    marginTop: "2rem",
  },
  textColor: {
    color: "#f8f9fa",
    marginTop: "4rem",
  },
  thirdContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textColorTwo: {
    marginBottom: "3rem",
  },
}));

export default function Tracker({ checked, getStyles, onCheckboxChange }) {
  const classes = useStyles();
  const symptoms = [
    "Cough",
    "Cough",
    "Cough",
    "Cough",
    "Cough",
    "Cough",
    "Cough",
    "Cough",
  ];

  return (
    <div className="container-main">
      <div className={classes.secondaryContainer}>
        <Typography className={classes.textColor} variant="h2">
          Symptom tracker
        </Typography>
      </div>
      <div className={classes.container}>
        {symptoms.map((symptom, index) => (
          <FormControlLabel
            variant
            labelPlacement="top"
            control={
              <YellowCheckbox
                className={classes.checkBox}
                checked={checked[index]}
                onChange={() => onCheckboxChange(index)}
                name="checkedB"
                color="primary"
              />
            }
            label={
              <Typography className={classes.textColor} variant="h5">
                {symptom}
              </Typography>
            }
          />
        ))}
      </div>
      <div className={classes.thirdContainer}>
        <Typography
          className={classes.textColorTwo}
          variant="h4"
          style={getStyles()}
        >
          You need to get checked
        </Typography>
      </div>
      <Button variant="contained" color="primary" size="large">
        Submit
      </Button>
    </div>
  );
}
