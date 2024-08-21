import get from "./getElement.js";

const drink_name = get(".drink-name");
const drink_desc = get(".drink-desc");
const drink_ingredients = get(".drink-ingredients");
const drink_image = get(".drink-img");

const displaySingleDrink = (data) => {
  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;
  const list_ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ]
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
  drink_name.textContent = name;
  drink_desc.textContent = desc;
  drink_ingredients.innerHTML = list_ingredients;
  drink_image.src = image;
};

export default displaySingleDrink;
