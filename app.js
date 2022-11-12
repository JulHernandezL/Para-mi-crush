/**
 * It takes an element and sets its position to relative, then sets its top and left properties to
 * random values within the bounds of the window.
 * @param elm - The element to move.
 */
function moverPosicionRandom(elm) {
  elm.style.position = "relative";
  elm.style.top =
    Math.random() * (window.innerHeight - 5 * elm.offsetHeight) + "px";
  elm.style.left =
    Math.random() * (window.innerWidth - 5 * elm.offsetWidth) + "px";
}

/* Getting the elements by their id and class name. */
let boton_si = document.getElementById("boton_si");
let boton_no = document.getElementById("boton_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

/* Adding an event listener to the element with the id "boton_no" that will call the function
"moverPosicionRandom" when the mouse enters the element. */
boton_no.addEventListener("mouseenter", function (e) {
  moverPosicionRandom(e.target);
});

/* Adding an event listener to the element with the id "boton_si" that will call a function, 
which displays an alert and plays an audio when the mouse clicksthe element. */
boton_si.addEventListener("click", function (e) {
  alert("Sabia que dirias que sí, casemonos ya y tengamos hijos. TE AMO!!!");
  divModoSexo.style.display = "block";
  const cancion = new Audio("Audio\\Cancion_modo_hot.mp3");
  cancion.play();
});
