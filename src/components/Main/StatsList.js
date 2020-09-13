import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: 'black' 
  }
}));

export default function StatsList({stat}) {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText className = {classes.textColor} primary = {`${stat.Country}: ${stat.TotalDeaths}`}/>
        </ListItem>
      </List>
      <Divider light = {true} /> 

    </div>
  )
}
