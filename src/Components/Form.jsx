import { useState } from "react";

export default function Form ({onAddActivity}) {  

    const [name, setName] = useState("")
    const [isForGoodWeather, setIsForGoodWeather] = useState(false)

    // Handle Submit Event -> Adding Activities
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted")
    // Extract the submitted data as an object
    const newActivity = {
        name: name,
        isForGoodWeather: isForGoodWeather,

        
        };

        // Call onAddActivity and pass it the data object as an argument
        onAddActivity(newActivity)

        // reset form 
        setName("")
        setIsForGoodWeather(false)

        // focus on the first input field 
        event.target.elements.name.focus();
    }

    return (
      <>
       <form onSubmit={handleSubmit}> 
        <h2 className ='header'>Add a New Activity</h2>
        
        <div>
        <label htmlFor="input_activity" className="input_activity"> Activity Name: </label>
        <input type="text" 
        name="name" 
        id="input_activity" 
        onChange={(e) => setName(e.target.value)}/>
        </div>
        

        <div> 
        <label htmlFor="input_checkbox">Good-weather activity</label>
        <input type="checkbox" id="input_checkbox" onChange={(e) => setIsForGoodWeather(e.target.checked)}/>
        </div>

        <div>
          <button type="submit" className="button--submit">Submit</button>
        </div>

      </form>
      </>
    )
}


  
    

