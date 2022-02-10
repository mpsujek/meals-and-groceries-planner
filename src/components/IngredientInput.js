export default function IngredientInput({ ingredient, setIngredient }) {
  return (
    <div>
      <label>
        Ingredients
        <input
          value={ingredient}
          onChange={(e) => {
            setIngredient(e.target.value);
          }}
          type="text"
        />
      </label>
    </div>
  );
}
