import React from "react";
import Button from "../UI/Button";

const MealForm = ({
  addMealHandler,
  mealName,
  handleMealNameChange,
  ingredientsFields,
  handleIngredientChange,
  addMoreIngrediets,
}) => {
  return (
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
            <Button onClick={addMoreIngrediets}>Add more</Button>
          </div>
        );
      })}
      <Button>Add meal</Button>
    </form>
  );
};

export default MealForm;
