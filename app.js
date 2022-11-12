function moverPosicionRandom(elm) {
  elm.style.position = "relative";
  elm.style.top =
    Math.random() * (window.innerHeight - 5 * elm.offsetHeight) + "px";
  elm.style.left =
    Math.random() * (window.innerWidth - 5 * elm.offsetWidth) + "px";
}

let boton_si = document.getElementById("boton_si");
let boton_no = document.getElementById("boton_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

boton_no.addEventListener("mouseenter", function (e) {
  moverPosicionRandom(e.target);
});

boton_si.addEventListener("click", function (e) {
  alert("Sabia que dirias que sí, casemonos ya y tengamos hijos. TE AMO!!!");
  divModoSexo.style.display = "block";
  const cancion = new Audio("Audio\\Cancion_modo_hot.mp3");
  cancion.play();
});
