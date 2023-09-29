/**
 * Funcion que permite crear una carta en el DOM
 * @param {string} carta carta a ser creada
 * @param {number} turno Turno del jugador a la carta ser creada.
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };

