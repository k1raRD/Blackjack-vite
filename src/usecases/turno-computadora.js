import { acumularPuntos, pedirCarta, crearCarta, determinarGanador } from "./index";

/**
 * Funcion que permite simular el turno de la computadora
 * @param {number} puntosMinimos Puntos minimos que la computadora debe superar para ganar.
 * @param {Array<String>} deck deck de cartas disponibles.
 * @param {Array<number>} puntosJugadores Puntos de los jugadores.
 * @param {NodeListOf<HTMLElement>} puntosHtml Elementos html que contiene los puntos de los jugadores.
 * @param {NodeListOf<Element>} divCartasJugadores Div html que contiene las cartas de los jugadores.
 */
export const turnoComputadora = (
  puntosMinimos,
  deck,
  puntosJugadores,
  puntosHtml,
  divCartasJugadores
) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHtml);
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};