class Producto {
    constructor(obj){
        this.nombre = obj.nombre;
        this.descripcion = obj.descripcion;
        this.precio = obj.precio;
        this.imagen = obj.imagen;
        this.productos = [];
    }
    agregar(obj){
        this.productos.push(obj);
    }
}

export default Producto;