import { elementos,apiUrl ,heroes } from "./global.js";
//const apiUrl ='https://kodemia-api-heroes.herokuapp.com'

const cardHeroe = (heroe) => {
    const card = `
    <form id="formModihero" class="w-100" onsubmit="modificarHeroe(event)">
    <div class="card col-sm-4 m-2">
        <img src="${heroe.imagen}" class="img-card-custom" >
        <div class="card-body">
            <input type="text" name="imagen" class="form-control my-2" value="${heroe.imagen}" required>
            <input type="text" name="alias" class="form-control my-2" value="${heroe.nombre}" required>
            <input type="text" name="nombre" class="form-control my-2" value="${heroe.alias}" required>
            <input type="text" name="_id" class="form-control my-2" value="${heroe._id}" disabled required>
            <div class = "d-flex justify-content-end gap-3">
                
                <button type="submit" class="my-2 btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>Modificar</button>
            </div>
        </div>

    </div>
    </form>`;
    return card;
}

const renderizarHeroes = (heroes) => {
    const cardsEnDiv = cardsHeores.children;
    if (cardsEnDiv.length > 0) {
        const cards = Array.from(cardsEnDiv);
        cards.forEach((card) => {
            cardsHeores.removeChild(card);
        })
    }
    //console.log(heroes)
    heroes.forEach((heroe) => {
        const card = cardHeroe(heroe);
        elementos.modiHero.insertAdjacentHTML('afterbegin', card);
    });
}

window.modificarHeroe = async(e)=>{
    e.preventDefault();
    try{
        const tiempoActual = new Date();
        const inputsNode = e.target.querySelectorAll('input');
        const inputs = Array.from(inputsNode);   
        let heroe = {}
        inputs.forEach((input) => {
            heroe[input.name] = input.value;
     //   console.log(heroe[input.name])
        });
        //heroe=e.target.querySelectorAll('input');
        console.log(heroe._id)
        const respuesta = await fetch(`${apiUrl}/heroe/${heroe._id}`,{
            method: 'PUT',
            body: JSON.stringify(heroe),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const body= await respuesta.json()
        setTimeout(() => {
            elementos.alertaGuardar.style.display = 'none';
            window.mostrarSeccion('todosLosHeroes');
        }, 1000);
    }
    catch{}
} 

export const initModificarHereo = (apiHero)=>{
    renderizarHeroes(apiHero);
}