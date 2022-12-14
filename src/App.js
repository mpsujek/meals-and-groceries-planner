// import { useState } from "react";
import Input from "./UI/Input";

function App() {
  // const [mealsList, setMealsList] = useState([]);

  const addMealHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="input_form">
        <h3>Here Input Your meal idea and ingredients</h3>
        <form onSubmit={addMealHandler}>
          <div>
            Meal name
            <input type="text" />
          </div>
          Ingredients
          <div>
            Name of ingredient
            <input type="text" />
            <Input
              label="Amount"
              input={{
                id: "amount",
                type: "number",
                min: "1",
                step: "0.5",
                defaultValue: "1",
              }}
            />
            <button>Add more</button>
          </div>
          <button>Add meal</button>
        </form>
      </div>
      <div className="meals_list">
        <h3>If you already have meal added chose from list</h3>
        <ul>
          <li>Some meal name</li>
        </ul>
      </div>
      <div className="shopping_list">
        <h3>Here you have ready shopping list</h3>
        <ul>
          <li>Just ingredients</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
