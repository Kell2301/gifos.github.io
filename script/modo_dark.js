let body = document.getElementById('body');
let url = window.location.pathname;

let darkModeStorage = localStorage.getItem("darkMode");
let darkModeBtn = document.getElementById('menu-modo');
darkModeBtn.addEventListener('click', cambioMode);

let darkModeActivado = () => {
    body.classList.add('body-dark');
    darkModeBtn.innerHTML = "MODO DIURNO";

    //navbar
    cambioLogos();
    cambioIconoCrearGifo();

    if (url === "/index.html" || url === "/gifos/index.html") {      
      cambioIconosBusqueda();
    }

    if (url === "/crear.html" || url === "/gifos/crear.html") {
        cambioCamaras();
    }

    localStorage.setItem("darkMode", "activado");
}

let darkModeDesactivado = () => {
    body.classList.remove('body-dark');
    darkModeBtn.innerHTML = "MODO NOCTURNO";

    cambioLogos();
    cambioIconoCrearGifo();

    if (url === "/index.html" || url === "/gifos/index.html") {
        cambioIconosBusqueda();
    }

    if (url === "/crear.html" || url === "/gifos/crear.html") {
        cambioCamaras();
    }

    localStorage.setItem("darkMode", null);
}

if (darkModeStorage === "activado") {
    darkModeActivado();
}

function cambioMode() {
    darkModeStorage = localStorage.getItem("darkMode");

    if (darkModeStorage !== "activado") {
        darkModeActivado();
    } else {
        darkModeDesactivado();
    }
}




function cambioLogos() {
    let logoMobile = document.getElementById('logo');
    let logoDesktop = document.getElementById('logo-desktop');

    if (darkModeBtn.innerHTML == 'MODO NOCTURNO') {
        logoDesktop.setAttribute("src", "./assets/logo-desktop.svg");
        logoMobile.setAttribute("src", "./assets/logo-mobile.svg");
    } else {
        logoDesktop.setAttribute("src", "./assets/Logo-modo-noc.svg");
        logoMobile.setAttribute("src", "./assets/logo-mobile-modo-noct.svg");
    }
}

function cambioIconoCrearGifo() {
    let iconoCrearGifo = document.querySelector('.mas-purpura');
    let iconoCrearGifoHover = document.querySelector('.mas-blanco');

    if (darkModeBtn.innerHTML == 'MODO NOCTURNO') {
        iconoCrearGifo.setAttribute("src", "./assets/button-crear-gifo.svg");
        iconoCrearGifoHover.setAttribute("src", "./assets/CTA-crear-gifo-hover.svg");
    } else {
        iconoCrearGifo.setAttribute("src", "./assets/CTA-crear-gifo-hover.svg");
        iconoCrearGifoHover.setAttribute("src", "./assets/CTA-crear-gifo-modo-noc.svg");
    }

}

function cambioIconosBusqueda() {

    if (darkModeBtn.innerHTML == 'MODO NOCTURNO') {
        iconBuscar.setAttribute("src", "./assets/icon-search.svg");
        btnCerrarBusqueda.setAttribute("src", "./assets/close.svg");
    } else {
        iconBuscar.setAttribute("src", "./assets/icon-search-mod-noc.svg");
        btnCerrarBusqueda.setAttribute("src", "./assets/Button-close-modo-noc.svg");
    }

}

function cambioCamaras() {
    let camaraIlus = document.getElementById('camara-ilustracion');
    let peliculaIlus = document.getElementById('pelicula-ilus');

    if (darkModeBtn.innerHTML == 'MODO NOCTURNO') {
        camaraIlus.setAttribute("src", "./assets/camara-modo-noc.svg");
        peliculaIlus.setAttribute("src", "./assets/pelicula-modo-noc.svg");
    } else {
        camaraIlus.setAttribute("src", "./assets/camara.svg");
        peliculaIlus.setAttribute("src", "./assets/pelicula.svg");
    }
}