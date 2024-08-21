import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const presentDrinks = async (URL) => {
  const data = await fetchDrinks(URL);

  const section = await displayDrinks(data);
  console.log(section);
};

export default presentDrinks;
