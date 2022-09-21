console.log("Estoy Funcionado");

// Variables de iconos para hacer el llamado del click 
const icono_persona = document.querySelector(".icono_persona");
const icono_empresa = document.querySelector(".icono_empresa");
const icono_seguridad = document.querySelector('.icono_seguridad');
const icono_seting = document.querySelector('.icono_seting');
const icono_folder = document.querySelector('.icono_folder');
const icono_tiempo = document.querySelector('.icono_tiempo');
const button_google = document.querySelector('.button-google');

// VARibles de Esferita arriba del menu
const esferita = document.querySelector(".esferita");
const esferita2 = document.querySelector('.esferita2');
const esferita3 = document.querySelector('.esferita3');
const esferita4 = document.querySelector('.esferita4');
const esferita5 = document.querySelector('.esferita5');
const esferita6 = document.querySelector('.esferita6');

//Llamamos a la clase cartas para poder interactutar con el none
const card_personas = document.querySelector(".card-persona");
const card_empresa = document.querySelector(".card-empresa");
const card_seguimiento = document.querySelector('.card-seguimiento');
const card_seting = document.querySelector('.card-seting');
const card_notas = document.querySelector('.card-notas'); 
const card_tiempo = document.querySelector('.card-tiempo');
const card_google = document.querySelector('.card-google');

const flota_contacto = document.querySelector('.m1');
const flota_empresa = document.querySelector('.m2')

//Llamado del envento click
icono_persona.addEventListener('click', verCartaPersona);
icono_empresa.addEventListener('click', verCartaEmpresa);
icono_seguridad.addEventListener('click', verCartaSeguridad);
icono_seting.addEventListener('click', verCartaSeting);
icono_folder.addEventListener('click', verCartaNotas);
icono_tiempo.addEventListener('click', verCartaTiempo);
button_google.addEventListener('click', verCartaGoogle);

//Evento de pasar el mause para que flote una alerta
icono_persona.addEventListener('mouseenter', contactoFLota)
icono_empresa.addEventListener('mouseenter', contactoFLota)

//Funciones del click 
function verCartaPersona() {
    card_personas.classList.toggle('invisible-persona');
    esferita.classList.toggle('mostar-icono')
    console.log("redy");
}

function verCartaEmpresa(){
    card_empresa.classList.toggle('invisible-empresa');
    esferita2.classList.toggle('mostar-icono2')
    console.log("redy");
}

function verCartaSeguridad(){
    card_seguimiento.classList.toggle('invisible-seguimiento');
    esferita3.classList.toggle('mostar-icono3')
    console.log('redy');
}

function verCartaSeting(){
    card_seting.classList.toggle('invisible-personalizacion');
    esferita4.classList.toggle('mostar-icono4')
    console.log('redy');
}

function verCartaNotas(){
    card_notas.classList.toggle('invisible-Notas');
    esferita5.classList.toggle('mostar-icono5')
    console.log('redy');
}

function verCartaTiempo(){
    card_tiempo.classList.toggle('invisible-tiempo');
    esferita6.classList.toggle('mostar-icono6')
    console.log('redy');
}

function verCartaGoogle(){
    card_google.classList.toggle('invisible-GoogleAds');
    console.log('redy');
}

//Funciones de mouse
function contactoFLota(){
    flota_contacto.classList.toggle('flotante');
    flota_empresa.classList.toggle('flotante2')
    console.log('flota');
}

