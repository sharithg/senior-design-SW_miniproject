import { Divider, Typography } from '@material-ui/core';
import React from 'react'
import './Counter.css'; 

export default function Counter({counter}) {

  const percentage = (counter*100).toPrecision(3);

  return (
    <div className = "counter-container">
      <div className="counter-text">
        <Typography  variant = "h4" >Percentage of people that have symptoms </Typography>
      </div>
      <Divider className="divider"/>
      <div className ="alt-text">
        <Typography variant ="h4" >{percentage}%</Typography>
      </div>
      
    </div>
  )
}
