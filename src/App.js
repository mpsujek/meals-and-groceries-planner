import React, { useState } from "react";

import InputFields from "./components/InputFields";
import Header from "./components/Header";
import MealsList from "./components/MealsList";
import ShoppingList from "./components/ShoppingList";

import "./App.css";
function App() {
  const [mealsObject] = useState("");
  return (
    <div className="App">
      <Header />
      <InputFields mealsObject={mealsObject} />
      <MealsList />
      <ShoppingList />
    </div>
  );
}

export default App;
