import React from "react";
import App from "../App";

const List = ({ activities, isGoodWeather, onDeleteActivity, condition, temperature }) => {
  return (
    <div>
      <h2 className="temperature">{condition}{temperature}</h2>
      <h2 className="condition-text">
        {isGoodWeather
          ? "The Weather is awesome! Go Outside and:"
          : `Bad Weather outside! Here's what you can do now:`}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="list-text">
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}
              className="delete-btn">Delete
              
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
