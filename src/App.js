import { useState, useEffect } from 'react';

import styled from 'styled-components';
import MealForm from './components/MealForm';
import MealsList from './components/MealsList';
import ShoppingList from './components/ShoppingList';
import WeekView from './UI/WeekView';
const MainWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function App() {
  const [mealsList, setMealsList] = useState(() => {
    const saved = localStorage.getItem('mealsList');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [mealName, setMealName] = useState('');
  const ingredientsFieldsClearState = {
    name: '',
    amount: '',
  };
  const [ingredientsFields, setIngredientsFields] = useState([
    ingredientsFieldsClearState,
  ]);

  const addMoreIngredients = (event) => {
    event.preventDefault();
    let newField = { name: '', amount: '' };
    setIngredientsFields([...ingredientsFields, newField]);
  };

  const handleIngredientChange = (index, event) => {
    let data = [...ingredientsFields];
    data[index][event.target.name] = event.target.value;
    setIngredientsFields(data);
  };
  const handleMealNameChange = (event) => {
    event.preventDefault();
    setMealName(event.target.value);
  };

  const addToShoppingListHandler = () => {
    console.log('item, clicked');
  };

  useEffect(() => {
    localStorage.setItem('mealsList', JSON.stringify(mealsList));
  }, [mealsList]);

  return (
    <MainWrapper>
      <MealForm
        mealName={mealName}
        setMealName={setMealName}
        setMealsList={setMealsList}
        mealsList={mealsList}
        handleMealNameChange={handleMealNameChange}
        ingredientsFields={ingredientsFields}
        handleIngredientChange={handleIngredientChange}
        addMoreIngredients={addMoreIngredients}
        setIngredientsFields={setIngredientsFields}
        ingredientsFieldsClearState={ingredientsFieldsClearState}
      />
      <MealsList
        mealsList={mealsList}
        addToShoppingListHandler={addToShoppingListHandler}
      />
      <ShoppingList mealsList={mealsList} />
      <WeekView />
    </MainWrapper>
  );
}

export default App;
