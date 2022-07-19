import Heroes from './Heroes.js';

const sectionsNode = document.querySelectorAll('section');
export const apiUrl ='https://kodemia-api-heroes.herokuapp.com'
export const elementos = {
    sections: Array.from(sectionsNode),
    alertaGuardar: document.getElementById('alertaGuardar'),
    cardsHeores: document.getElementById('cardsHeores'),
    resultadosBusqueda: document.getElementById('resultadosBusqueda'),
    busquedasRecientesList: document.getElementById('busquedasRecientesList'),
    inputBuscar: document.getElementById('inputBuscar'),
    fecha: document.getElementById('fecha'),
    year: document.getElementById('year'),
    modiHero: document.getElementById('modiHero')
}
export let busquedasRecientes = [];
export const heroes = new Heroes();