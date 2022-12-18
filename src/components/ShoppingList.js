import React from "react";
import Button from "../UI/Button";
import { Wrapper } from "../UI/Wrapper";

const ShoppingList = ({ mealsList }) => {
  return (
    <Wrapper>
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
      <Button
        onClick={() => {
          navigator.clipboard.writeText("hello");
        }}
      >
        Copy to clipboard
      </Button>
    </Wrapper>
  );
};

export default ShoppingList;
