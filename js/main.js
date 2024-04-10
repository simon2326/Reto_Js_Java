import Producto from './producto.js';
import Carrito from './carrito.js';
import Contenedor from './contenedor.js';
import Lista from './lista.js';

let carrito, contenedor, lista, cantidad
let listap = [];

window.onload = ()=>{
    lista = new Lista();
    carrito = new Carrito();
    lista.agregar(new Producto({
        nombre: "Coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    lista.agregar(new Producto({
        nombre: "Americano",
        descripcion: "Cafe negro",
        precio:6000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    lista.agregar(new Producto({
      nombre: "Soda de fresa",
      descripcion: "bebida fria",
      precio:12000,
      imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
  }));
    
    const productosContainer = document.getElementById("productos");
    
    contenedor = new Contenedor();
    contenedor.ref = productosContainer;

    contenedor.pintarDatos(lista.productos);
    const btnsMenos = document.querySelectorAll('.btn-menos');
    const btnsMas = document.querySelectorAll('.btn-mas');
    const cantidadInputs = document.querySelectorAll('.cantidad input[type="text"]');
    const btnsAgregar = document.querySelectorAll('.btn_agregar');
  
    btnsMenos.forEach((btnMenos, index) => {
      btnMenos.addEventListener('click', (event) => {
        cantidad = parseInt(cantidadInputs[index].value);
        cantidad = cantidad > 1 ? cantidad - 1 : 1;
        cantidadInputs[index].value = cantidad;
      });
    });
  
    btnsMas.forEach((btnMas, index) => {
        btnMas.addEventListener('click', (event) => {
        cantidad = parseInt(cantidadInputs[index].value);
        cantidad++;
        cantidadInputs[index].value = cantidad;
        });
    });

    btnsAgregar.forEach((btnAgregar) => {
        btnAgregar.addEventListener("click", (event) => {
        let index=event.target.attributes[2].value;
        let obj = lista.productos[index];
        obj['cantidad'] = cantidad;
        carrito.agregar(obj);
        console.log(carrito);
        });
    });   

}


