import React from "react";
import { Wrapper } from "../UI/Wrapper";
import SingleMeal from "./SingleMeal";

const MealsList = ({ mealsList }) => {
  return (
    <Wrapper>
      <h3>If you already have meal added chose from list</h3>
      <ul>
        {mealsList.map((singleMeal) => {
          return <SingleMeal singleMeal={singleMeal} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default MealsList;
