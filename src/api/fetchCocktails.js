
function getRandomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
  const randomIndex = Math.floor(Math.random() * alphabet.length); // Pick a random number
  return alphabet[randomIndex]; // Get the letter at that number
}

// Fetch cocktail recipes from the API with a random letter
export async function fetchCocktails() {
  const letter = getRandomLetter(); // Get a random letter
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    if (!response.ok) {
      throw new Error('API response not ok');
    }
    const data = await response.json();
    return data.drinks || []; // Return recipes or empty array
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}