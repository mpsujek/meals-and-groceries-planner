import { useState } from "react";
import MealForm from "./components/MealForm";
import MealsList from "./components/MealsList";
import ShoppingList from "./components/ShoppingList";
import Button from "./UI/Button";

function App() {
  const [mealsList, setMealsList] = useState([]);
  const [mealName, setMealName] = useState("");
  const ingredientsFieldsClearState = {
    name: "",
    amount: "",
  };
  const [ingredientsFields, setIngredientsFields] = useState([
    ingredientsFieldsClearState,
  ]);

  const addMoreIngrediets = (event) => {
    event.preventDefault();
    let newfield = { name: "", amount: "" };
    setIngredientsFields([...ingredientsFields, newfield]);
  };

  const handleIngredientChange = (index, event) => {
    let data = [...ingredientsFields];
    data[index][event.target.name] = event.target.value;
    setIngredientsFields(data);
  };
  const handleMealNameChange = (event) => {
    event.preventDefault();
    setMealName(event.target.value);
  };

  const addMealHandler = (event) => {
    event.preventDefault();
    const newMeal = { name: mealName, ingredients: ingredientsFields };
    const newMealList = [...mealsList, newMeal];
    console.log(newMealList);
    setMealsList(newMealList);
    setMealName("");
    setIngredientsFields([ingredientsFieldsClearState]);
  };

  return (
    <div className='App'>
      <div className='input_form'>
        <h3>Here Input Your meal idea and ingredients</h3>
        <MealForm
          addMealHandler={addMealHandler}
          mealName={mealName}
          handleMealNameChange={handleMealNameChange}
          ingredientsFields={ingredientsFields}
          handleIngredientChange={handleIngredientChange}
          addMoreIngrediets={addMoreIngrediets}
        />
      </div>
      <div className='meals_list'>
        <h3>If you already have meal added chose from list</h3>
        <MealsList mealsList={mealsList} />
      </div>
      <div className='shopping_list'>
        <h3>Here you have ready shopping list</h3>
        <ShoppingList mealsList={mealsList} />
        <Button
          onClick={() => {
            navigator.clipboard.writeText("hello");
          }}
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
}

export default App;
