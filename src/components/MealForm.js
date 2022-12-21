import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../UI/Button';
import { Wrapper } from '../UI/Wrapper';

const MealForm = ({
  mealName,
  handleMealNameChange,
  ingredientsFields,
  handleIngredientChange,
  addMoreIngrediets,
  setMealName,
  setIngredientsFields,
  setMealsList,
  mealsList,
  ingredientsFieldsClearState,
}) => {
  const [enteredMealNameTouched, setEnteredMealNameTouched] = useState(false);
  const mealNameBlurHanlder = (event) => {
    setEnteredMealNameTouched(true);
  };
  const mealInputIsValid = mealName.trim() !== '';
  const mealNameInputIsValid = !mealInputIsValid && enteredMealNameTouched;

  const addMealHandler = (event) => {
    event.preventDefault();

    if (mealNameInputIsValid) {
      return;
    }
    const newMeal = {
      id: uuidv4(),
      name: mealName,
      ingredients: ingredientsFields,
    };

    const newMealList = [...mealsList, newMeal];
    setMealsList(newMealList);
    setMealName('');
    setIngredientsFields([ingredientsFieldsClearState]);
  };
  return (
    <Wrapper>
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
            onBlur={mealNameBlurHanlder}
          />
          {mealNameInputIsValid && <p>Please enter meal name</p>}
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
              <Button onClick={addMoreIngrediets}>Add more</Button>
            </div>
          );
        })}
        <Button>Add meal</Button>
      </form>
    </Wrapper>
  );
};

export default MealForm;
