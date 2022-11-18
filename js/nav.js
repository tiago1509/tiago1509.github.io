let boton_abrir;
let boton_cerrar;
let ventana;

window.onload = inicio;

function inicio(){
  boton_abrir = document.getElementById("abrir");
  boton_cerrar = document.getElementById("cerrar");
  ventana = document.getElementById("ventana");
  boton_abrir.addEventListener("click",abrirVentana);
  boton_cerrar.addEventListener("click",cerrarVentana);
}

function abrirVentana(evento)
{
  ventana.classList.toggle("hidden");
  ventana.classList.add("animate__animated","animate__fadeIn");
}

function cerrarVentana(evento)
{
  ventana.classList.toggle("hidden");
}