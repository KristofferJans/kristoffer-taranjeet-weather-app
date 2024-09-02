import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./Components/List.jsx";
import "./App.css";
import Form from "./Components/Form.jsx";

function App() {
  const [activities, setActivities] = useState(() => {
    // Retrieve the 'activities' item from localStorage
    const savedActivities = localStorage.getItem("activities");
    // If there are saved activities, parse them from JSON
    // If not, return an empty array
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  // Function to handle adding a new activity - newActivity as parameter which is an object
  function handleAddActivity(newActivity) {
    const activityWithId = { ...newActivity, id: uid() }; // Create a new activity object with a unique ID
    setActivities((prevActivities) => [...prevActivities, activityWithId]); // Update the state by adding the new activity to the existing list - prevActivities represents the current state of activities before the update
  }
  const isGoodWeather = false;

  // Filter activities based on the weather condition
  const filteredActivities = activities.filter(
    (activities) => activities.isForGoodWeather === isGoodWeather
  );

  // Effect to persist the activities array in localStorage
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  return (
    <>
      {/* Pass filtered activities and weather condition to List component */}
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      {/* Pass handleAddActivity function to Form component */}
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
