class Producto {
    constructor(obj){
        this.nombre = obj.nombre;
        this.descripcion = obj.descripcion;
        this.precio = obj.precio;
        this.imagen = obj.imagen;
        this.cantidad = 0;
    }
}

export default Producto;