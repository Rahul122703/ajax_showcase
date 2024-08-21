import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const section = get(".section-center");
const title = get(".title");
const displayDrinks = async ({ drinks }) => {
  hideLoading();
  if (!drinks) {
    title.innerHTML = "NO MATCHING DRINKS FOUND";
    section.innerHTML = null;
    return;
  } else {
    const drinks_html = drinks
      .map((currentDrink) => {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
        } = currentDrink;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
      })
      .join("");
    title.innerHTML = "";
    section.innerHTML = drinks_html;
    return section;
  }
};

export default displayDrinks;
