const fetchDrinks = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
