import React from 'react';

const MealList = ({ meals, handleMealClick }) => {
  return (
    <div>
      <h2>Saved Meals</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            <button onClick={() => handleMealClick(meal)}>{meal.meal}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
