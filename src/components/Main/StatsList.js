import { Typography } from '@material-ui/core'
import React from 'react'
import './StatsList.css'

export default function StatsList({stat}) {
  return (
    <div className = "list-item">
      <Typography variant ='body1'>
        {stat.Country} { ' '}
        {stat.TotalDeaths} 
      </Typography>
    </div>
  )
}
