//import { closeModal }  from './main.js';

class ModalContenedor{
    
    pintarDatos(obj){
        let tem = "";
        for(var i in obj){
            tem += 
            `<div class="card" id = "card_carrito">
                <img src="${obj[i].imagen}" alt="producto">
                <span class="texto">
                    <h1 class="nombre">${obj[i].nombre}</h1>
                    <p class="descripcion">${obj[i].descripcion}</p>
                </span>
                <p class="precio">${obj[i].precio} </p>
                <input type="text" class="cantidad" id ="carrito" value=${obj[i].cantidad} readonly>
                <button class="btn_eliminar">
                <img src="https://icons.iconarchive.com/icons/ampeross/qetto-2/48/trash-icon.png" 
                alt="" class="${obj[i].nombre}"></button>
            </div>`;
        }
        tem += 
            `<div id="totales">
            <p class="total">total</p>
            <input type="text" name="" class="total_input" value="" readonly> 
            </div>
            <button class="btn_finalizar">finalizar</button>`;
            this.ref.insertAdjacentHTML('beforeend', tem);
    }
}
export default ModalContenedor;