import { useEffect, useState } from 'react'
import { uid } from 'uid'
import List from './Components/List.jsx'
import './App.css'
import Form from './Components/Form.jsx' 

function App() {

  const [activities, setActivities] = useState(() => {
     // Retrieve the 'activities' item from localStorage
    const savedActivities = localStorage.getItem('activities');
    // If there are saved activities, parse them from JSON
    // If not, return an empty array
    return savedActivities ? JSON.parse(savedActivities) : [];
  });
 
 
  function handleAddActivity (newActivity) {
    const activityWithId = { ...newActivity, id: uid() };
    setActivities((prevActivities) => [...prevActivities, activityWithId]);
  }
  const isGoodWeather = false

  const filteredActivities = activities.filter((activities)=> activities.isForGoodWeather === isGoodWeather)
  

  useEffect(()=> {
    localStorage.setItem('activities',JSON.stringify(activities));
  }, [activities]);

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather}/>
      <Form onAddActivity={handleAddActivity} />
    </>
  )
}

export default App
