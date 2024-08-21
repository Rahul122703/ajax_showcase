const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked_drink_id = e.target.parentElement.dataset.id;
    console.log(clicked_drink_id);
    window.location.replace("drink.html");
  });
  localStorage.setItem("clicked_drink", clicked_drink_id);
};

export default setDrink;
