const getElement = (className) => {
  const element = document.querySelector(className);
  if (element) {
    return element;
  } else {
    throw new Error("NO ELEMENT FOUND");
  }
};
export default getElement;
