import React, { useState } from "react";

import AddMeal from "./components/AddMeal";
import Header from "./components/Header";
import MealsList from "./components/MealsList";
import ShoppingList from "./components/ShoppingList";

import "./App.css";
function App() {
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: "Danie Fuj",
      ingredients: [
        {
          id: 11,
          name: "marchewka",
          count: 4,
        },
        {
          id: 12,
          name: "parówka",
          count: 6,
        },
      ],
    },
    {
      id: 2,
      name: "drugie",
      ingredients: [
        {
          id: 11,
          name: "pomidor",
          count: 1,
        },
        {
          id: 12,
          name: "ogórek",
          count: 2,
        },
      ],
    },
  ]);

  const addMealAndIngredients = (meal) => {
    const newMeal = { ...meal };
    setMeals([...meals, newMeal]);
    console.log(meal);
    console.log(meals);
  };
  return (
    <div className="App">
      <Header />
      <AddMeal
        meals={meals}
        setMeals={setMeals}
        addMealAndIngredients={addMealAndIngredients}
      />
      <MealsList meals={meals} />
      <ShoppingList meals={meals} />
    </div>
  );
}

export default App;
