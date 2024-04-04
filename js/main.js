const Producto = require('./Producto');
const Carrito = require('./carrito');



let p = new Producto({nombre: "lol", descripcion: "Bebida", precio: 12.3, imagen: ""});
let p2 = new Producto({nombre: "lol", descripcion: "Bebida", precio: 12.3, imagen: ""});
let p3 = new Producto({nombre: "aybb es q tu tmb", descripcion: "Beb", precio: 123, imagen: ""});
let c = new Carrito();
c.agregar(p);
c.agregar(p2);
c.agregar(p3);

console.log(c);
