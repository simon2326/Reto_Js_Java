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
                <p class="precio">${obj[i].precio}</p>
                <input type="text" class="cantidad" value=${obj[i].cantidad} readonly>
            </div>`;
        }
        tem += 
            `<div id="totales">
            <p class="total">total</p>
            <input type="text" name="" id="total_input"> 
            </div>
            <button class="btn_finalizar">finalizar</button>`;
            this.ref.insertAdjacentHTML('beforeend', tem);
    }
}
export default ModalContenedor;