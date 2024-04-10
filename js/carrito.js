class Carrito{
    constructor (obj){
        this.productos = [];
    }

    agregar(obj){
        const productoExistente = this.productos.find(p => p.nombre === obj.nombre);
        if (productoExistente){
            productoExistente.cantidad = obj.cantidad;
        } 
        else {
            this.productos.push(obj);
        }
    }
}

export default Carrito;
