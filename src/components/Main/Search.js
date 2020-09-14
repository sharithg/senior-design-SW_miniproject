import { Typography } from '@material-ui/core'
import React from 'react'
import './Search.css'

export default function Search({country}) {

  if (country[0] === undefined) {
    return <div><Typography>Please enter a country</Typography></div>
  } else {
    //console.log(country[0])
  }
  return (
    <div className = "container">
      <div className ='stat-info'>
      <Typography>{`Country: ${country[0].Country}`}</Typography>
      <Typography>{`Date: ${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}</Typography>
      <Typography>{`New Cases: ${country[0].NewConfirmed}`}</Typography>
      <Typography>{`Total Cases: ${country[0].TotalConfirmed}`}</Typography>
      <Typography>{`Total Deaths: ${country[0].TotalDeaths}`}</Typography>
      <Typography>{`Total Recovered: ${country[0].TotalRecovered}`}</Typography>
      </div>
      
    </div> 
  )
  
}
