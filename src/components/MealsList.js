import React from "react";

const MealsList = ({ mealsList }) => {
  return (
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
  );
};

export default MealsList;
