import Producto from './producto.js';
import Carrito from './carrito.js';
import Contenedor from './contenedor.js';

let carrito, contenedor

window.onload = ()=>{
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
    const btnsMenos = document.querySelectorAll('.btn-menos');
    const btnsMas = document.querySelectorAll('.btn-mas');
    const cantidadInputs = document.querySelectorAll('.cantidad');
  
    btnsMenos.forEach((btnMenos, index) => {
      btnMenos.addEventListener('click', () => {
        let cantidad = parseInt(cantidadInputs[index].value);
        cantidad = cantidad > 1 ? cantidad - 1 : 1;
        cantidadInputs[index].value = cantidad;
      });
    });
  
    btnsMas.forEach((btnMas, index) => {
      btnMas.addEventListener('click', () => {
        let cantidad = parseInt(cantidadInputs[index].value);
        cantidad++;
        cantidadInputs[index].value = cantidad;
      });
    });
}


