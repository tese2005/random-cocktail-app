import { fetchCocktail } from './api/fetchCocktails.js';
// filepath: /Users/lthompson.if25/Desktop/random-cocktail-app/app.js
import { renderCocktailCard, renderError } from './components/cocktailDisplay.js';

// Main website logic
export function App() {
  const app = document.createElement('div');
  app.className = 'text-center';

  const button = document.createElement('button');
  button.textContent = 'Get Random Cocktail';
  button.className = 'btn';

  const cocktailContainer = document.createElement('div');
  cocktailContainer.className = 'mt-4';

  button.addEventListener('click', async () => {
    cocktailContainer.innerHTML = '<p class="loading">Loading...</p>';
    try {
      const cocktail = await fetchCocktail();
      cocktailContainer.innerHTML = renderCocktailCard(cocktail);
    } catch (error) {
      cocktailContainer.innerHTML = renderError(error.message);
    }
  });

  app.appendChild(button);
  app.appendChild(cocktailContainer);
  return app;
}