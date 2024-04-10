import Producto from './producto.js';
import Carrito from './carrito.js';
import Contenedor from './contenedor.js';
import Lista from './lista.js';
import ModalContenedor from './modalContenedor.js';

let carrito, contenedor, lista, cantidad, modalContenedor 

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito.productos));
}

// Función para cargar la lista de productos del carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito.productos = JSON.parse(carritoGuardado);
    }
}

window.onload = ()=>{
    lista = new Lista();
    carrito = new Carrito();
    cargarCarritoDesdeLocalStorage();
    lista.agregar(new Producto({
        nombre: "Coca-cola",
        descripcion: "bebida",
        precio:2000,
        imagen: "https://icons.iconarchive.com/icons/michael/coke-pepsi/72/Coca-Cola-Can-icon.png"
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
      imagen: "https://icons.iconarchive.com/icons/sonya/swarm/128/Juice-icon.png"
  }));

  lista.agregar(new Producto({
    nombre: "Soda de manzana",
    descripcion: "bebida fria",
    precio:12000,
    imagen: "https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/72/apple-green-icon.png"
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
        cantidad = 1;
        btnAgregar.addEventListener("click", (event) => {
        let index=event.target.attributes[2].value;
        cantidad = parseInt(cantidadInputs[index].value);
        let obj = lista.productos[index];
        obj['cantidad'] = cantidad;
        let precio = cantidad * obj['precio'];
        obj['total'] = precio;
        console.log(precio);
        console.log(cantidad)
        carrito.agregar(obj);
        console.log(carrito.productos);
        guardarCarritoEnLocalStorage();
        alert("Producto agregado")
        });
        let totalees = carrito.calcularTotal();
        console.log(totalees)
    });  

    
    
    let btnsEliminar;
    function openModal() {
        
        document.getElementById("overlay").style.display = "block";
        document.getElementById("modal").style.display = "block";
        document.getElementById("container").style.display = "none";
        
        let productosContainer = document.getElementById("carrito");
        productosContainer.innerHTML = '';
        modalContenedor = new ModalContenedor();
        modalContenedor.ref = productosContainer;
        modalContenedor.pintarDatos(carrito.productos);

        btnsEliminar = document.querySelectorAll('.btn_eliminar');
        const totalinput = document.querySelector('.total_input');
        totalinput.value = carrito.calcularTotal();

        btnsEliminar.forEach((btnEliminar) => {
            btnEliminar.addEventListener("click", (event) => {
            let producto = event.target.className;
            const productoExistente = carrito.productos.find(p => p.nombre === producto);
            console.log(productoExistente)
            var indice = carrito.productos.indexOf(productoExistente); // obtenemos el indice
            carrito.productos.splice(indice, 1);
            productosContainer.innerHTML = '';
            modalContenedor.pintarDatos(carrito.productos);
            totalinput.value = carrito.calcularTotal();
            guardarCarritoEnLocalStorage();
            });
        });
    }
    
   

    function closeModal() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("modal").style.display = "none";
        document.getElementById("container").style.display = "block";
    }

    // Agregar evento de clic al botón para abrir la modal
    document.querySelector(".btn_carrito").addEventListener("click", openModal);
    document.querySelector(".btn_cerrar").addEventListener("click", closeModal);    
}



