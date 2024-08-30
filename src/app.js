/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let nombre = ["El gato", "Mi madre", "El doctor", "Mi hermana"];
  let acción = [
    "se cayó",
    "cogió una pelota",
    "hizo la comida",
    "rescató un perro"
  ];
  let lugar = ["en la playa", "en el bar", "en el parque", "en el hospital"];

  let nombreIndex = Math.floor(Math.random() * nombre.length);
  let acciónIndex = Math.floor(Math.random() * acción.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excusa").innerHTML =
    nombre[nombreIndex] + " " + acción[acciónIndex] + " " + lugar[lugarIndex];
};
