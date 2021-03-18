import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
export default function InputFields() {
  const [meal, setMeal] = useState([]);
  const mealElementRef = useRef();
  const ingredientsRef = useRef();

  const addElementToList = () => {
    const name = mealElementRef.current.value;
    const interegients = ingredientsRef.current.value;

    if (name === "") return;
    setMeal((prevListElem) => {
      return [
        ...prevListElem,
        { id: uuidv4(), name: name, interegients: interegients },
      ];
    });
    mealElementRef.current.value = null;
    ingredientsRef.current.value = null;
  };

  const list = meal.map((element) => {
    return (
      <li key={element.id}>{`${element.name} (${element.interegients})`}</li>
    );
  });

  const shoppinngList = meal.map((element) => {
    const arrayOfInteregients = element.interegients.split(",");
    const listOfElements = [];
    console.log(arrayOfInteregients);
    arrayOfInteregients.forEach(function (item, index) {
      listOfElements.push(<li key={index}>{item}</li>);
    });
    return listOfElements;
  });
  return (
    <>
      <label>
        Name of meal
        <input type="text" ref={mealElementRef} />
      </label>
      <label>
        Ingredients
        <input type="text" ref={ingredientsRef} />
      </label>
      <button onClick={addElementToList}>Add meal</button>
      <div className="list">
        <div className="">Meal list:</div>
        <ul>{list}</ul>
      </div>
      <div className="shoppingList">
        <div className="">What You need to buy:</div>
        <ul>{shoppinngList}</ul>
      </div>
    </>
  );
}
