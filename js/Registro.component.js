import { apiUrl, elementos, heroes } from './global.js';
import * as mostrarHero from './TodosHeroes.component.js'



window.guardarHeroe = async(e) => {
    e.preventDefault();
    const tiempoActual = new Date();
    const inputsNode = e.target.querySelectorAll('input');
    const inputs = Array.from(inputsNode);
    let heroe = {}
    inputs.forEach((input) => {
        heroe[input.name] = input.value;
    })
    //heroe.__id = `${tiempoActual.getTime()}-${tiempoActual.getMilliseconds()}`;
    const completado = await mostrarHero.creaHero(heroe)
   // console.log(completado)
    elementos.alertaGuardar.style.display = '';
    setTimeout(() => {
        elementos.alertaGuardar.style.display = 'none';
        window.mostrarSeccion('todosLosHeroes');
    }, 1000);
}

export const initRegistro = () => {
    elementos.alertaGuardar.style.display = 'none';
}