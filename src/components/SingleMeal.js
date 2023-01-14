import React from 'react';

const SingleMeal = ({ singleMeal, addToShoppingListHandler }) => {
  return (
    <li key={singleMeal.id}>
      {singleMeal.name} (ingredients:
      {singleMeal.ingredients.map((ingredient) => {
        return (
          <span>
            {ingredient.name} ({ingredient.amount})
          </span>
        );
      })}
      )
      <button onClick={addToShoppingListHandler(singleMeal.ingredients)}>
        Add to Shopping List
      </button>
    </li>
  );
};

export default SingleMeal;
