import React from 'react'
import App from '../App'

const List = ({activities, isGoodWeather}) => {
  return (
    <div>
      <h2>{isGoodWeather ? "The Weather is awesome! Go Outside and:" : `Bad Weather outside! Here's what you can do now:`}</h2>
      <ul>
        {activities.map((activities) => (
          <li key={activities.id}>
            {activities.name}{''}
            
          </li>
        ))}
       
      </ul>
    </div>
  )
}

export default List