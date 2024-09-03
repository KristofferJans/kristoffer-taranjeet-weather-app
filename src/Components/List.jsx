import React from "react";
import App from "../App";

const List = ({ activities, isGoodWeather, onDeleteActivity, condition, temperature }) => {
  return (
    <div>
      <h2>{condition}{temperature}</h2>
      <h2>
        {isGoodWeather
          ? "The Weather is awesome! Go Outside and:"
          : `Bad Weather outside! Here's what you can do now:`}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
