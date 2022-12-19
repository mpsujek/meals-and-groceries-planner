import React from "react";

const SingleMeal = ({ singleMeal }) => {
  return (
    <li>
      {singleMeal.name} (ingredients:
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
};

export default SingleMeal;
