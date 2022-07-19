import { elementos } from './global.js';
import { initTodosHeroes } from './TodosHeroes.component.js';
import { initBusquedaComponent } from './Busqueda.component.js';
import { initRegistro } from './Registro.component.js';
import { initModificarHereo } from './ModificarHereo.component.js';

import * as mostrarHero from './TodosHeroes.component.js'
const heroes = await mostrarHero.mostrarHero()


const main = async()=>{
    try{
        //0,10
        console.log(heroes)
        initRegistro();
        initTodosHeroes(heroes)
        initModificarHereo(heroes);
        initBusquedaComponent();
       // console.log(heroes)
       window.mostrarSeccion('todosLosHeroes',heroes);//todosLosHeroes modificarHeroe
    }
    catch{

    }
}

const init = () => {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    elementos.fecha.innerText = `${dia}/${mes}/${anio}`;
    elementos.year.innerText = anio;
   // initTodosHeroes();
    initBusquedaComponent();
    initRegistro();
    
    main()
    window.mostrarSeccion('registro',heroe); // todosLosHeroes modificarHeroe
}

window.mostrarSeccion = (section) => {
    elementos.sections.forEach((sectionElement) => {
        if (sectionElement.id === section) {
            sectionElement.style.display = '';
        } else {
            sectionElement.style.display = 'none';
        }

        if (sectionElement.id === 'todosLosHeroes') {
            initTodosHeroes(heroes);
        }
    });
}



//init();
main()