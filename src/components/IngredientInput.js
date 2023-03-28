import React from 'react';

function IngredientInput(props) {
  const handleIngredientChange = (event) => {
    props.onChange(event, props.index);
  };

  const handleRemoveIngredient = () => {
    props.onRemove(props.index);
  };

  return (
    <div>
      <label>
        Ingredient {props.index + 1}:
        <input
          type='text'
          value={props.value}
          onChange={handleIngredientChange}
        />
      </label>
      <button type='button' onClick={handleRemoveIngredient}>
        Remove
      </button>
    </div>
  );
}

export default IngredientInput;
