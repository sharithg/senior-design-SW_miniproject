import React from 'react'

export default function StatsList({stat}) {
  return (
    <div>
      {stat.Country} { " "} 
      {stat.TotalDeaths}   
    </div>
  )
}
