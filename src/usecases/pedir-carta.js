
/**
 * Funcion que sirve para obtener un carta y regresa la carta obtenida.
 * @param {Array<String>} deck de cartas a elegir una carta.
 * @returns {String} carta escogida del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay mas cartas en el deck";
  }
  return deck.pop();
};
