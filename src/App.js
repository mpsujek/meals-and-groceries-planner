function App() {
  return (
    <div className='App'>
      <div className='input_form'>
        <h3>Here Input Your meal idea and ingredients</h3>
        <form action=''>
          Meal name
          <input type='text' />
          Ingredients
          <input type='text' />
          Number
          <input type='number' />
        </form>
      </div>
      <div className='meals_list'>
        <h3>If you already have meal added chose from list</h3>
        <ul>
          <li>Some meal name</li>
        </ul>
      </div>
      <div className='shopping_list'>
        <h3>Here you have ready shopping list</h3>
        <ul>
          <li>Just ingredients</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
