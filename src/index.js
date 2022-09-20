console.log("Estoy Funcionado");

const icono_persona = document.querySelector(".icono_persona");
const icono_empresa = document.querySelector(".icono_empresa");
const icono_seguridad = document.querySelector('.icono_seguridad');
const icono_seting = document.querySelector('.icono_seting');
const icono_folder = document.querySelector('.icono_folder');
const icono_tiempo = document.querySelector('.icono_tiempo');
const button_google = document.querySelector('.button-google'); 

const card_personas = document.querySelector(".card-persona");
const card_empresa = document.querySelector(".card-empresa");
const card_seguimiento = document.querySelector('.card-seguimiento');
const card_seting = document.querySelector('.card-seting');
const card_notas = document.querySelector('.card-notas'); 
const card_tiempo = document.querySelector('.card-tiempo');
const card_google = document.querySelector('.card-google');



icono_persona.addEventListener('click', verCartaPersona);
icono_empresa.addEventListener('click', verCartaEmpresa);
icono_seguridad.addEventListener('click', verCartaSeguridad);
icono_seting.addEventListener('click', verCartaSeting);
icono_folder.addEventListener('click', verCartaNotas);
icono_tiempo.addEventListener('click', verCartaTiempo);
button_google.addEventListener('click', verCartaGoogle);

function verCartaEmpresa(){
    card_empresa.classList.toggle('invisible-empresa');
    console.log("redy");
}

function verCartaPersona() {
    card_personas.classList.toggle('invisible-persona');
    console.log("redy");
}

function verCartaSeguridad(){
    card_seguimiento.classList.toggle('invisible-seguimiento');
    console.log('redy');
}

function verCartaSeting(){
    card_seting.classList.toggle('invisible-personalizacion');
    console.log('redy');
}

function verCartaNotas(){
    card_notas.classList.toggle('invisible-Notas');
    console.log('redy');
}

function verCartaTiempo(){
    card_tiempo.classList.toggle('invisible-tiempo');
    console.log('redy');
}

function verCartaGoogle(){
    card_google.classList.toggle('invisible-GoogleAds');
    console.log('redy');
}