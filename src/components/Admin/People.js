import { Divider, Typography } from '@material-ui/core';
import React from 'react'
import './People.css';

export default function People({people}) {

  const form = people.formFilled ? "Completed form" : "no form found"

  return (
    <div>
      <div className ="people-container">
      <div>
        <Typography variant="h5">{people.email}</Typography>
      </div>
      <div>
        <Typography >{form}</Typography> 
      </div>
      <div>
        <Typography>has symptoms</Typography>
      </div>
    </div>
    <Divider />
    </div>
    
  )
}
