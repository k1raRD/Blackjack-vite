import _ from "underscore";
// import { crearDeck as crearNuevoDeck } from '../usecases/crear-deck';
// import crearDeck, {miNombre} from '../usecases/crear-deck';
import {
  crearDeck,
  turnoComputadora,
  pedirCarta,
  acumularPuntos,
  crearCarta
} from "../usecases/index";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHtml = document.querySelectorAll("small");

  /**
   * Inicializa el juego
   * @returns
   */
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHtml.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Eventos
  btnPedir.addEventListener("click", (e) => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHtml);
    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      console.warn("Lo sinto mucho perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        deck,
        puntosJugadores,
        puntosHtml, 
        divCartasJugadores
      );
    } else if (puntosJugador == 21) {
      console.warn("21, Genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        deck,
        puntosJugadores,
        puntosHtml, 
        divCartasJugadores
      );
    }
  });

  btnDetener.addEventListener("click", (e) => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(
      puntosJugadores[0],
      deck,
      puntosJugadores,
      puntosHtml,
      divCartasJugadores
    );
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
