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
import { rdb } from "../../base";
import { AuthContext } from "../../Auth";
import { formatDate } from "../../common/formatDate";

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const styles = (theme) => ({
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
});

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [false, false, false, false, false, false, false, false],
      user: null,
    };
    this.symptoms = [
      "Fever or chills",
      "Coughing",
      "Shortness of breath or difficulty breathing",
      "Fatigue",
      "Muscle or body aches",
      "Headache",
      "New loss of taste or smell",
      "Nausea or vomiting",
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.setState({ user: this.context });
  }

  onCheckboxChange = (num) => {
    let check = [...this.state.checked];
    check[num] = !this.state.checked[num];
    this.setState({ checked: check }, () => {
      this.props.counterCheck(this.state.checked);
    });
  };

  handleSubmit = async () => {
    var d = new Date();
    var today = formatDate(d);
    console.log(this.state.user.currentUser);
    const userEmailSplit = this.state.user.currentUser.email.split("@");
    const userEmail = `${userEmailSplit[0]}-${userEmailSplit[1]}`;

    const data = {};
    const user_id = this.state.user.currentUser.uid;
    data[user_id] = {
      email: this.state.user.currentUser.email,
      num_symptoms: this.state.checked.filter((val) => val === true).length,
    };
    const dataObj = {
      email: this.state.user.currentUser.email,
      num_symptoms: this.state.checked.filter((val) => val === true).length,
    };
    var ref = rdb.ref(`responses/${today}`);
    ref.on(
      "value",
      function (snapshot) {
        if (snapshot.val()) ref.child(user_id).set(dataObj);
        else ref.set(data);
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container-main">
        <div className={classes.secondaryContainer}>
          <Typography className={classes.textColor} variant="h2">
            Symptom tracker
          </Typography>
        </div>
        <br />
        <br />
        <br />
        <div className={classes.container}>
          {this.symptoms.map((symptom, index) => (
            <FormControlLabel
              variant
              labelPlacement="top"
              control={
                <YellowCheckbox
                  className={classes.checkBox}
                  checked={this.state.checked[index]}
                  onChange={() => this.onCheckboxChange(index)}
                  name="checkedB"
                  color="primary"
                />
              }
              label={
                <Typography className={classes.textColor} variant="h8">
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
            style={this.props.getStyles()}
          >
            {this.state.checked.filter((val) => val === true).length > 0
              ? "You need to get checked"
              : ""}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={this.handleSubmit}
          style={{ marginLeft: "10px", marginBottom: "10px" }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tracker);
