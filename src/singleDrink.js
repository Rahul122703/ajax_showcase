import fetchDrinks from "./fetchDrinks.js";
import displaySingleDrink from "./displaySingleDrink.js";
import { hideLoading } from "./toggleLoading.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async (URL) => {
  const id = localStorage.getItem("clicked_drink");
  if (id) {
    const data = await fetchDrinks(`${URL}${id}`);
    console.log("ths is here");
    hideLoading();
    displaySingleDrink(data);
  } else {
    window.location.replace("index.html");
  }
};

window.addEventListener("DOMContentLoaded", presentDrink(URL));
