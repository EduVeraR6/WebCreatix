const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const links = document.getElementById("links-js");

abrir.addEventListener("click",()=>{
    abrir.classList.toggle("bi-list-cerrar");
    cerrar.classList.toggle("bi-x-circle-abierto");
    links.classList.toggle("open-hamburguer");
});

cerrar.addEventListener("click",()=>{
    abrir.classList.toggle("bi-list-cerrar");
    cerrar.classList.toggle("bi-x-circle-abierto");
    links.classList.toggle("open-hamburguer");
});