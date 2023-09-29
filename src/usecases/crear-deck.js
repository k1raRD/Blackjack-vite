import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck de cartas.
 * @param {Array<String>} tipos Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} especiales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Regresa un nuevo deck de cartas.
 */
export const crearDeck = (tipos, especiales) => {
  if (!tipos || tipos.length === 0) throw new Error("tipos es obligatorio como un arreglo de string");
  if (!especiales || especiales.length === 0) throw new Error("especiales es obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
};
