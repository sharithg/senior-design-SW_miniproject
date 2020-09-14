import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import './Tracker.css' 
import { FormControlLabel, Checkbox, FormControl, InputLabel, Input, FormHelperText, Typography, Button } from '@material-ui/core';

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600], 
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  secondaryContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-7rem' 
  },
  checkBox: {
    transform: 'scale(2)',
    marginTop: '2rem'
  },
  textColor: {
    color:'#f8f9fa',
    marginTop: '4rem'
  },
  thirdContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  textColorTwo: {
    marginBottom: '3rem'
  }

}));

export default function Tracker({ checked, getStyles, onCheckboxChange }) {
  
  const classes = useStyles();

  return (
    <div className = 'container-main'>  
    <div className = {classes.secondaryContainer}>
      <Typography className = {classes.textColor} variant="h2">
        Symptom tracker
      </Typography>
    </div>
    <div className = {classes.container}>
      <FormControlLabel variant labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[0]} onChange={() => onCheckboxChange(0)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[1]} onChange={() => onCheckboxChange(1)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[2]} onChange={() => onCheckboxChange(2)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[3]} onChange={() => onCheckboxChange(3)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[4]} onChange={() => onCheckboxChange(4)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel checked = {checked[5]} labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} onChange={() => onCheckboxChange(5)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[6]} onChange={() => onCheckboxChange(6)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />

        <FormControlLabel labelPlacement = "top" control= 
        {
        <YellowCheckbox className = {classes.checkBox} checked = {checked[7]} onChange={() => onCheckboxChange(7)}  name="checkedB" color="primary"/>
        } label={<Typography className={classes.textColor} variant="h5">Coughing</Typography>} />
    </div>
    <div className = {classes.thirdContainer}> 
     <Typography className={classes.textColorTwo} variant = "h4" style={getStyles()}>You need to get checked</Typography>
    </div>
    <Button variant = 'contained' color = 'primary' size = 'large' >Submit</Button>

    </div>
  );
} 


