import React from "react";

const ShoppingList = ({ mealsList }) => {
  return (
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
  );
};

export default ShoppingList;
