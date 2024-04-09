import Producto from './producto.js';
import Carrito from './carrito.js';
import Contenedor from './contenedor.js';
import Lista from './lista.js';

let carrito, contenedor, lista

window.onload = ()=>{
    lista = new Lista();
    carrito = new Carrito();
    lista.agregar(new Producto({
        nombre: "coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    lista.agregar(new Producto({
        nombre: "coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
    }));

    lista.agregar(new Producto({
      nombre: "coca-cola",
      descripcion: "bebida",
      precio:2000,
      imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
  }));

  lista.agregar(new Producto({
    nombre: "coca-cola",
    descripcion: "bebida",
    precio:2000,
    imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
  }));

  lista.agregar(new Producto({
    nombre: "coca-cola",
    descripcion: "bebida",
    precio:2000,
    imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
  }));
    
    const productosContainer = document.getElementById("productos");
    
    contenedor = new Contenedor();
    contenedor.ref = productosContainer;

    contenedor.pintarDatos(lista.productos);
    const btnsMenos = document.querySelectorAll('.btn-menos');
    const btnsMas = document.querySelectorAll('.btn-mas');
    const cantidadInputs = document.querySelectorAll('.cantidad input[type="text"]');

    const btnAgregar = document.querySelectorAll('.btn_agregar');
  
    btnsMenos.forEach((btnMenos, index) => {
      btnMenos.addEventListener('click', (event) => {
        //let index = event.target.attributes[1].value;
        let cantidad = parseInt(cantidadInputs[index].value);
        //console.log(cantidadInputs[index].value);return;
        cantidad = cantidad > 1 ? cantidad - 1 : 1;
        cantidadInputs[index].value = cantidad;
      });
    });
  
    btnsMas.forEach((btnMas, index) => {
      btnMas.addEventListener('click', (event) => {
        let cantidad = parseInt(cantidadInputs[index].value);
        cantidad++;
        cantidadInputs[index].value = cantidad;
      });

      console.log(document.querySelectorAll('.btn_agregar'));

      btnAgregar.addEventListener("click", (event)=>{
        let index = event.target.attributes[1].value;
        console.log(btnAgregar);
        carrito.agregar(lista.productos[index]);
        console.log(carrito);
      });
    });

    

}


