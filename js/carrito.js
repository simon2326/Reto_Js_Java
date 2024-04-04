class Carrito{
    constructor (obj){
        this.productos = [];
    }

    agregar(obj){
        this.productos.push(obj);
    }
}

module.exports = Carrito;
