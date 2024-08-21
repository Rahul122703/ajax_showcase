import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const search_form = get(".search-form");
const search_input = get(".drink123");

search_form.addEventListener("keyup", () => {
  const search_text = search_input.value;
  presentDrinks(`${baseURL}${search_text}`);
  console.log("here it is");
});
