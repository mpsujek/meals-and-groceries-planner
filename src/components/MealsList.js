import React from "react";
import { Wrapper } from "../UI/Wrapper";

const MealsList = ({ mealsList }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MealsList;
