import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
const presentDrinks = async (URL) => {
  const data = await fetchDrinks(URL);

  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
