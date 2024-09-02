# Tasks

## Add Activity Form

Being able to create new data is a good starting point for an app, so the first step is to create a form component to add a new activity.

- Clean the app from everything which you don't need for a fresh start.
- Write a Form component which:
  - Contains a heading.
  - Has two input fields (name of activity, checkbox whether it is a good- or bad-weather activity) with appropriate labels.
  - Includes a submit button.
  - Receives a prop called `onAddActivity`.
- Handle the submit event:
  - Extract the submitted data as an object with the keys `name` and `isForGoodWeather` and their respective values.
  - **Hint**: To get the boolean value of a checkbox, use `.checked`.
  - Call `onAddActivity` and pass it the data object as an argument.
  - After submitting, reset the form and focus the first input field.
- Switch to the `App.js` and:
  - Create a state for activities.
  - Write a function `handleAddActivity` which accepts a new activity object as a parameter and adds this object to the activities state.
  - Add a unique id to every new activity object; you can use `uid` to do so.
  - Pass `handleAddActivity` to the Form component; make sure to use the correct prop name.

Use this wireframe as a reference:

*form component wireframe*

🎉 **Congratulations**, you can now add new activities, including whether they can be done in good or bad weather!

## List Component

By now, you can add new activities, but they are not yet displayed. Let's fix this.

- Write a List component which renders a list with list items for each activity in the activities state.
- Make the state persistent in local storage.

Use this wireframe as a reference:

*list and form component wireframe*

## Filtering the List

Currently, the list displays all activities, regardless of whether they are good or bad weather activities. The main purpose of the app, however, is to show activities depending on the current (good / bad) weather fetched from an API, so the list needs to be filtered.

- In the `App.js`, add a variable `const isGoodWeather = true`.
  - **Note**: For simplicity, we will use a hardcoded variable to imitate good or bad weather for now.
- Filter the activities for those whose key `isForGoodWeather` is equal to the global `isGoodWeather` variable.
- Instead of all activities, pass the filtered activities to the List component.
- In the List component, add a headline depending on the global `isGoodWeather` variable.

Use this wireframe as a reference:

*filtered list wireframe*

## Fetch API

Refactor the code so that the "random" weather does not depend on a variable you set yourself, but on the answer from our weather API.

- Replace the global `isGoodWeather` variable from the previous task with a new state for weather.
- Fetch the weather API on initial render only.
- The weather state should equal the response you receive from the API.

*Advanced note*: The API has some more specific endpoints to test your application.

- In the `App.js`, add a heading to display the condition emoji and the temperature.

Use this wireframe as a reference:

*fetch api wireframe*

## Delete an Item

- In the List component, add a delete button for each list item.
- The List component needs to receive a new prop called `onDeleteActivity`.
  - Pass it to the delete button as the `onClick` prop.
  - Pass the activity's id to `onDeleteActivity` as an argument.
- In the `App.js`, write a function `handleDeleteActivity`, which accepts an id as a parameter. The function should filter the activities state and keep all objects except the one with the given id.
- Pass `handleDeleteActivity` to the List component as `onDeleteActivity` prop.

Use this wireframe as a reference:

*delete button wireframe*

## Bonus

### Fetch on Interval

Fetching weather only on initial render is not really useful to stay up-to-date. Refactor your code so that the fetch is done every 5 seconds. Make sure to clear the timer when the component unmounts.

### Design Refinement

While wireframes serve as a foundation, take advantage of this opportunity to refine the design further. Focus on aspects such as color schemes, responsiveness, and accessibility to enhance the visual appeal and user experience.

### City Selection Feature

Introduce a city selection feature to personalize the weather app experience for users. Empower users to choose their preferred city and view relevant weather information, adding a layer of customization to the application.

### Task Categorization in To-Do List

Enhance task organization by implementing categories in the to-do list. Introduce a feature that allows users to categorize tasks, facilitating more efficient task management and organization.

### Custom Styling for Categories

Explore diverse styling options for each task category within the to-do list. Implement unique visual styles for different categories to add visual interest and aid users in distinguishing between tasks effectively.

### Responsive Design Optimization

Ensure optimal responsiveness of the application across various devices and screen sizes. Conduct thorough testing to guarantee a seamless user experience, regardless of the device used to access the application.

### Handling Lengthy To-Do Text

Address potential issues arising from lengthy to-do text by implementing appropriate solutions. Consider strategies to prevent style disruption and maintain readability when dealing with longer task descriptions.

    