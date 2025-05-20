// Import our recipe fetcher and card painter
import { fetchCocktails } from './api/fetchCocktails.js';
import { renderCocktails } from './components/cocktailDisplay.js';


document.addEventListener('DOMContentLoaded', () => {
  
  const recipeButton = document.getElementById('getRecipes');
  const waitingSign = document.getElementById('waiting');
  const oopsSign = document.getElementById('oops');
  const recipeShelf = document.getElementById('recipeShelf');

  // Show the waiting sign
  function showWaiting() {
    waitingSign.classList.remove('hide');
    oopsSign.classList.add('hide');
    recipeShelf.innerHTML = '';
  }


  function showOops(message) {
    waitingSign.classList.add('hide');
    oopsSign.classList.remove('hide');
    oopsSign.textContent = message;
  }

  // Get recipes and show them
  async function getAndShowRecipes() {
    showWaiting();
    try {
      const recipes = await fetchCocktails();
      renderCocktails(recipes, recipeShelf);
      waitingSign.classList.add('hide');
    } catch (error) {
      showOops('Oh no! Couldn’t get cocktails. Try again!');
    }
  }

  // Button click to get recipes
  recipeButton.addEventListener('click', getAndShowRecipes);

  // Get recipes when the page loads
  getAndShowRecipes();
});