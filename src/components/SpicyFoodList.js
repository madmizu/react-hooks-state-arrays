import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

// create a variable for the new <li> 
  // use map() method - Note: creates a new array populated with the results of calling a provided function on every element in the calling array.
    // syntax = 'array name'.map(FUNCTION)
  // the (FUNCTION) will take in each element of the original array as a paramenter
  // the (FUNCTION) will then render a <li> with a key (always needed for arrays in react) set to the original array's ids
  // the (FUNCTION) <li> will have text content that lists out the name of the food, the heat level w/ heat label and the cuisine with cuisine label - each with | as a divider in the text.
  // then have the compoent render a <ul> below the button that will have this new <li> rendered within it.

// update handleAddFood by delcaring a variable for a new array that equals a copy of the original array (spread operator) and the new food added to the end.
  // use the state setter to change our original array to the new array

// add feature to remove elements from arrays in state
  // add click handler to new <li>s that are created. Make sure the click handler is referencing a function not invoking it. Also, the function must know what food is being handled, so it needs to read the food.id
  // create a function that handles the click and updates our array
    // common solution uses .filter method
      // create a function that handles click, takes in the food'd id as a parameter
      // creates a new variable for the new array that runs the filter method on the original array and *filters through that array, running a function on each element. 
        // this function looks for any element whose id DOES NOT equal the id we are passing in, 
        // then, uses the state setter to change the original array to the new array we created and filtered out

// change delete feature to update only the food level for that specific food
  // We use the .map method to create a new array based on the criteria set by the function it calls. 
    // declare a variable for the new array and have it equal to the .map method that runs over the original array
    // run a function on that original array that checks the id to see if it matches with what was clicked
    // IF it does match, return the spread operator to copy all elements from the original array and add the new newly adjusted heatlevel +1
    // ELSE return the original array (for all other elements whose id did not match the clicked food)

// working with multiple state variables
    // create <select> feature and all <options> for filtering *to be added to a new function we will create
      // Set values and text content for each <option>
      // add this feature to return of SpicyFoodList component
    // declare initial state for filtering, with 'all' as the initial start
    // create function for handling filter change, with the handler event as the paramenter
      // use the state setter to change the filterBy to the value of your event (ie when you change the option, it will change the state)
    // set variable for results to display that match filter.
      // make variable equal to the original array with a filter method ran on it that runs each element through a function:
        // if the state (filterBy) stricly equals "All", return 'true'
        // ELSE return foods whose cusiine strictly equals the state (filterBy)


function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplau = foods.filter

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  // function handleListClick (identificationNum) {
  //   const newFoodArray = foods.filter((food) => food.id !== identificationNum);
  //   setFoods(newFoodArray);
  // }

  function handleListClick (identificatonNum) {
    const newFoodArray = foods.map((food) => {
      if (food,id === identificatonNum) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleListClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
