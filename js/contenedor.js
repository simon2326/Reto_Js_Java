class Contenedor{
    pintarDatos(obj){
        let tem = "";
        for(var i in obj){
            tem += 
            `<div class="card">
                <img src="${obj[i].imagen}" alt="producto">
                <span class="texto">
                    <h1 class="nombre">${obj[i].nombre}</h1>
                    <p class="descripcion">${obj[i].descripcion}</p>
                </span>
                <div class="cantidad">
                    <p class="precio">${obj[i].precio}</p>
                    <input type="button" value="-" class="btn">
                    <input type="text" class="cantidad">
                    <input type="button" value="+" class="btn">
                </div>
                <input type="button" value="Agregar" class="btn_agregar">
            </div>`;
        }
        this.ref.innerHTML = tem;
    }
}
export default Contenedor;