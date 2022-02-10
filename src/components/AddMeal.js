import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddMeal({ meals, setMeals, addMealAndIngredients }) {
  const [mealName, setMealName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientCount, setIngredientCount] = useState("");
  const [ingredientsList, setIngredientsList] = useState([
    {
      uuid: uuidv4(),
      name: "",
      count: 0,
    },
    {
      uuid: uuidv4(),
      name: "",
      count: 0,
    },
  ]);
  const addMeal = (e) => {
    e.preventDefault();
    if (!mealName) {
      alert("Please insert meal name");
    } else if (!ingredient) {
      alert("Please insert ingredient name");
    } else {
      const ingredients = {
        id: uuidv4(),
        name: ingredient,
        count: ingredientCount,
      };
      addMealAndIngredients({
        id: uuidv4(),
        name: mealName,
        ingredients: [ingredients],
      });
    }
  };

  const handleChangeIngredientsInput = (index, e) => {
    const values = [...ingredient];
    values[index][e.target.type] = e.target.value;
    setIngredientsList(values);
  };
  return (
    <>
      <div className="">
        <label>
          Name of meal
          <input
            value={mealName}
            onChange={(e) => {
              setMealName(e.target.value);
            }}
            type="text"
          />
        </label>
        {ingredientsList.map((ingredientList, index) => (
          <div key={index}>
            <label>
              Ingredients
              <input
                value={ingredient}
                onChange={(e) => handleChangeIngredientsInput(index, e)}
                type="text"
              />
            </label>
            <label>
              Ingredient count
              <input
                type="number"
                value={ingredientCount}
                onChange={(e) => handleChangeIngredientsInput(index, e)}
              />
            </label>
          </div>
        ))}

        <button onClick={addMeal}>Add meal</button>
      </div>
    </>
  );
}
