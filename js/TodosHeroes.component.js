import { elementos, heroes, apiUrl } from './global.js';

export const mostrarHero = async(from,to)=>{//
    try{
        const respuesta= await fetch(`${apiUrl}/heroes?from=${from}&to=${to}`)//
        const body = await respuesta.json()
        //console.log(heroes)
        return body.heroes
    }

    catch(error){
         
    }
}
const heroesAwait = await mostrarHero()


const cardHeroe = (heroe) => {
    const card = `<div class="card col-sm-4 my-4">
        <img src="${heroe.imagen}" class="img-card-custom" >
        <div class="card-body">
            <h5 class="card-title">${heroe.alias}</h5>
            <p class="card-text">Nombre Real: ${heroe.nombre}</p>
            <div class = "d-flex justify-content-end gap-3">
                <button onclick="mostrarSeccion('modificarHeroe')" class="btn btn-primary"><i class="fa-solid fa-paintbrush"></i></button>
                <button onclick="eliminarHeroe('${heroe._id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>

    </div>`;
    
    return card;
}

const renderizarHeroes = (heroes) => {
    const cardsEnDiv =elementos.cardsHeores.children;
    if (cardsEnDiv.length > 0) {
        const cards = Array.from(cardsEnDiv);
        cards.forEach((card) => {
           elementos.cardsHeores.removeChild(card);
        })
    }
  //  console.log(heroes)
    heroes.forEach((heroe) => {
        const card = cardHeroe(heroe);
     //   console.log(heroe)
        elementos.cardsHeores.insertAdjacentHTML('afterbegin', card);
    })
}

window.eliminarHeroe = async(id) => {
    console.log(id)
    const eliminar = confirm('¿Deseas eliminar este héroe?')
    
    try{
        const respuesta = await fetch(`${apiUrl}/heroe/${id}`,{method:'DELETE'})
        const body = await respuesta.json()
        renderizarHeroes(heroesAwait)
        console.log(body)
    }
    catch{

    }

}

export const removeHeroe = async(id)=>{
    try{
        const respuesta = await fetch(`${apiUrl}/heroe?id=${id}`)
        const body = await respuesta.json()
        console.log(body)
    }
    catch{

    }
}

export const initTodosHeroes = (heroes) => {
    renderizarHeroes(heroes);
}



export const creaHero = async (heroe)=>{
    try{
        console.log('entra2')
        const respuesta = await fetch(`${apiUrl}/heroe`, {
            method: 'POST',
            body : JSON.stringify(heroe),
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        const body = await respuesta.json()
        console.log(body)
        return body.ok
    }

    catch(error){
        throw error
    }
}