import { Typography } from '@material-ui/core';
import React from 'react'
import People from './People';
import './PeopleList.css';

export default function peopleList({people}) {

const renderedPeople = people.slice(0,10).map((people) => {
  return (
  <div>
    <People people = {people} />
  </div>
)})

  return (
    <div className = 'main-container'>
      <Typography  variant ='h2'>Admin Panel</Typography>
      <div className="peopleList-container">
        <div className="people-list">
          {renderedPeople} 
        </div>
      </div>
    </div>
    
  )
}
