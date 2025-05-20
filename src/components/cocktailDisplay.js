//  cocktail recipes on the shelf
export function renderCocktails(recipes, shelf) {
  shelf.innerHTML = ''; // Clear the shelf

  if (!recipes.length) {
    shelf.innerHTML = '<p>No cocktails found!</p>';
    return;
  }

  // card for each cocktail
  recipes.forEach(recipe => {
    const { strDrink, strDrinkThumb, strInstructions, strIngredient1, strIngredient2 } = recipe;
    const card = `
      <div class="recipe-card">
        <img src="${strDrinkThumb}" alt="${strDrink}">
        <div class="card-content">
        <h2>${strDrink}</h2>
        <p><strong>Ingredients:</strong> ${strIngredient1}${strIngredient2 ? ', ' + strIngredient2 : ''}</p>
        <p><strong>Instructions:</strong> ${strInstructions}</p>
        </div>
      </div>
    `;
    shelf.insertAdjacentHTML('beforeend', card);
  });
}