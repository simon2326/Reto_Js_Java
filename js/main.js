import Producto from './producto.js';
import Carrito from './carrito.js';
import Contenedor from './contenedor.js';

let carrito, contenedor

window.onload = ()=>{
    console.log('Página cargada');
    carrito = new Carrito();
    carrito.agregar(new Producto({
        nombre: "coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    carrito.agregar(new Producto({
        nombre: "coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    const productosContainer = document.getElementById("productos");
    
    contenedor = new Contenedor();
    contenedor.ref = productosContainer;

    contenedor.pintarDatos(carrito.productos);
}


