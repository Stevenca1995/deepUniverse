const getRandomElement = (elements) => {
  //? Logica necesaria para resolver un elemento aleatorio de ese areglo

  const indexRandom = Math.floor(Math.random() * elements.length);
  return elements[indexRandom];
};

export { getRandomElement };
