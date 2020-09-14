import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: 'black',
    fontSize: '2rem'
  }
}));

export default function StatsList({stat}) {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primaryTypographyProps className = {classes.textColor} disableTypography primary={<Typography variant="h5" style={{ color: '#000' }}> {`${stat.Country}: ${stat.TotalDeaths}`}</Typography>} />
        </ListItem>
      </List>
      <Divider light = {true} /> 

    </div>
  )
}
