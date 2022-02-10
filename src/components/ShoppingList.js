export default function ShoppingList({ meals }) {
  return (
    <>
      <p>
        Here will be displayed shopping list with option to share it with
        others.
      </p>
      <div className="shoppingList">
        <div className="">What You need to buy:</div>
        <ul>
          {meals.map((meal) =>
            meal.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {`${ingredient.count} x ${ingredient.name}`}{" "}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
