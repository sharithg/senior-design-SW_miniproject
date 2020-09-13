import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '30vh',
    backgroundColor: "#f1f1f1"
  }
}));

export default function Tracker() {
  
  const classes = useStyles();

  return (
    <div className = {classes.container}>
       <Checkbox
        
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
} 


/*
const [checked, setChecked] = React.useState(true);
 
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }; 
  */