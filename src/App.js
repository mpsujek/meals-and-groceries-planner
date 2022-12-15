import { useState } from "react";

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
        <form onSubmit={addMealHandler}>
          <div>
            <label>Meal name</label>
            <input
              name='meal name'
              placeholder='Meal name'
              type='text'
              value={mealName}
              onChange={handleMealNameChange}
            />
          </div>
          {ingredientsFields.map((ingredient, index) => {
            return (
              <div key={index}>
                <div>
                  <label htmlFor={`ingredient-${index}`}>Ingredient</label>
                  <input
                    id={`ingredient-${index}`}
                    value={ingredient.name}
                    placeholder='Ingredient name'
                    type='text'
                    name='name'
                    onChange={(event) => handleIngredientChange(index, event)}
                  />
                </div>
                <div>
                  <label htmlFor={`ingredient-${index}`}>Amount</label>
                  <input
                    name='amount'
                    id={`ingredient-${index}`}
                    value={ingredient.amount}
                    type='number'
                    step='0.5'
                    onChange={(event) => handleIngredientChange(index, event)}
                  />
                </div>
                <button onClick={addMoreIngrediets}>Add more</button>
              </div>
            );
          })}

          <button>Add meal</button>
        </form>
      </div>
      <div className='meals_list'>
        <h3>If you already have meal added chose from list</h3>
        <ul>
          {mealsList.map((singleMeal) => {
            return (
              <li>
                {singleMeal.name} (ingredients:{" "}
                {singleMeal.ingredients.map((ingredient) => {
                  return (
                    <span>
                      {ingredient.name} ({ingredient.amount})
                    </span>
                  );
                })}
                )
              </li>
            );
          })}
        </ul>
      </div>
      <div className='shopping_list'>
        <h3>Here you have ready shopping list</h3>
        <ul>
          {mealsList.map((singleMeal) => {
            return singleMeal.ingredients.map((ingredient) => {
              return (
                <li>
                  {ingredient.name} ({ingredient.amount})
                </li>
              );
            });
          })}
        </ul>
        <button>Copy to clipboard</button>
      </div>
    </div>
  );
}

export default App;
