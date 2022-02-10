import React from "react";

export default function MealsList({ meals }) {
  return (
    <>
      <p>Here will be diplayed Meal list with ingredients</p>
      <div className="list">
        <div className="">Meal list:</div>
        <ul>
          {meals.map((meal) => (
            <li>{meal.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
