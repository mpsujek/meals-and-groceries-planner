import React, { useState, useEffect } from 'react';
import MealsList from './components/MealsList';

function App() {
  const [meal, setMeal] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [savedMeals, setSavedMeals] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const meals = localStorage.getItem('meals');
    if (meals) {
      setSavedMeals(JSON.parse(meals));
    }
  }, []);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    const newIngredients = [...ingredients, { name: '', amount: '', unit: '' }];
    setIngredients(newIngredients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = { meal, ingredients };
    const newMeals = [...savedMeals, newMeal];
    localStorage.setItem('meals', JSON.stringify(newMeals));
    setMeal('');
    setIngredients([]);
    setSavedMeals(newMeals);
  };

  const handleAddToShoppingList = (ingredient) => {
    const newShoppingList = [...shoppingList, ingredient];
    setShoppingList(newShoppingList);
  };

  const handleMealClick = (meal) => {
    setMeal(meal.meal);
    setIngredients(meal.ingredients);
  };

  return (
    <div>
      <h1>Meal Input</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Meal:
          <input
            type='text'
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          />
        </label>
        <br />
        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type='text'
              placeholder='Ingredient'
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, 'name', e.target.value)
              }
            />
            <input
              type='number'
              placeholder='Amount'
              value={ingredient.amount}
              onChange={(e) =>
                handleIngredientChange(index, 'amount', e.target.value)
              }
            />
            <select
              value={ingredient.unit}
              onChange={(e) =>
                handleIngredientChange(index, 'unit', e.target.value)
              }>
              <option value=''>Select unit</option>
              <option value='g'>g</option>
              <option value='kg'>kg</option>
              <option value='ml'>ml</option>
              <option value='l'>l</option>
              <option value='count'>count</option>
            </select>
          </div>
        ))}
        <button type='button' onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <br />
        <br />
        <button type='submit'>Save</button>
      </form>
      <hr />
      <MealsList meals={savedMeals} handleMealClick={handleMealClick} />
      <hr />
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
