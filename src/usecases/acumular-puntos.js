import { valorCarta } from "./index";

/**
 * Funcion que sirve para acumular los puntos de un jugador
 * Turno: 0 = primer juador y el ultimo sera la computadora
 * @param {string} carta pasada por el jugador
 * @param {number} turno turno del jugador
 * @param {Array<number>} puntosJugadores puntos de los jugadores
 * @param {NodeListOf<HTMLElement>} puntosHtml pantalla de puntos del jugador
 * @returns {number} puntos del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHtml) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHtml[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
