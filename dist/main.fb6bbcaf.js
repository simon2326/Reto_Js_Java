// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/producto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Producto = /*#__PURE__*/_createClass(function Producto(obj) {
  _classCallCheck(this, Producto);
  this.nombre = obj.nombre;
  this.descripcion = obj.descripcion;
  this.precio = obj.precio;
  this.imagen = obj.imagen;
  this.cantidad = 0;
  this.total = 0;
});
var _default = exports.default = Producto;
},{}],"js/carrito.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Carrito = /*#__PURE__*/function () {
  function Carrito(obj) {
    _classCallCheck(this, Carrito);
    this.productos = [];
  }
  return _createClass(Carrito, [{
    key: "agregar",
    value: function agregar(obj) {
      var productoExistente = this.productos.find(function (p) {
        return p.nombre === obj.nombre;
      });
      if (productoExistente) {
        productoExistente.cantidad = obj.cantidad;
      } else {
        this.productos.push(obj);
      }
    }
  }, {
    key: "calcularTotal",
    value: function calcularTotal() {
      var totalCarrito = 0;
      var _iterator = _createForOfIteratorHelper(this.productos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var producto = _step.value;
          totalCarrito += producto.total;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return totalCarrito;
    }
  }]);
}();
var _default = exports.default = Carrito;
},{}],"js/contenedor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Contenedor = /*#__PURE__*/function () {
  function Contenedor() {
    _classCallCheck(this, Contenedor);
  }
  return _createClass(Contenedor, [{
    key: "pintarDatos",
    value: function pintarDatos(obj) {
      var tem = "";
      for (var i in obj) {
        tem += "<div class=\"card\" id = \"".concat(i, "\">\n                <img src=\"").concat(obj[i].imagen, "\" alt=\"producto\">\n                <span class=\"texto\">\n                    <h1 class=\"nombre\">").concat(obj[i].nombre, "</h1>\n                    <p class=\"descripcion\">").concat(obj[i].descripcion, "</p>\n                </span>\n                <div class=\"cantidad\">\n                    <p class=\"precio\">").concat(obj[i].precio, "</p>\n                    <input type=\"button\" valor=\"").concat(i, "\" value=\"-\" class=\"btn-menos\">\n                    <input type=\"text\" class=\"cantidad\" value=\"1\" readonly>\n                    <input type=\"button\" value=\"+\" class=\"btn-mas\">\n                </div>\n                <input type=\"button\" value=\"Agregar\" data-index=\"").concat(i, "\" class=\"btn_agregar\">\n            </div>");
      }
      this.ref.innerHTML = tem;
    }
  }]);
}();
var _default = exports.default = Contenedor;
},{}],"js/lista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Lista = /*#__PURE__*/function () {
  function Lista(obj) {
    _classCallCheck(this, Lista);
    this.productos = [];
  }
  return _createClass(Lista, [{
    key: "agregar",
    value: function agregar(obj) {
      this.productos.push(obj);
    }
  }]);
}();
var _default = exports.default = Lista;
},{}],"js/modalContenedor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//import { closeModal }  from './main.js';
var ModalContenedor = /*#__PURE__*/function () {
  function ModalContenedor() {
    _classCallCheck(this, ModalContenedor);
  }
  return _createClass(ModalContenedor, [{
    key: "pintarDatos",
    value: function pintarDatos(obj) {
      var tem = "";
      for (var i in obj) {
        tem += "<div class=\"card\" id = \"card_carrito\">\n                <img src=\"".concat(obj[i].imagen, "\" alt=\"producto\">\n                <span class=\"texto\">\n                    <h1 class=\"nombre\">").concat(obj[i].nombre, "</h1>\n                    <p class=\"descripcion\">").concat(obj[i].descripcion, "</p>\n                </span>\n                <p class=\"precio\">").concat(obj[i].precio, " </p>\n                <input type=\"text\" class=\"cantidad\" id =\"carrito\" value=").concat(obj[i].cantidad, " readonly>\n                <button class=\"btn_eliminar\">\n                <img src=\"https://icons.iconarchive.com/icons/ampeross/qetto-2/48/trash-icon.png\" \n                alt=\"\" class=\"").concat(obj[i].nombre, "\"></button>\n            </div>");
      }
      tem += "<div id=\"totales\">\n            <p class=\"total\">total</p>\n            <input type=\"text\" name=\"\" class=\"total_input\" value=\"\" readonly> \n            </div>\n            <button class=\"btn_finalizar\">finalizar</button>";
      this.ref.insertAdjacentHTML('beforeend', tem);
    }
  }]);
}();
var _default = exports.default = ModalContenedor;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _producto = _interopRequireDefault(require("./producto.js"));
var _carrito = _interopRequireDefault(require("./carrito.js"));
var _contenedor = _interopRequireDefault(require("./contenedor.js"));
var _lista = _interopRequireDefault(require("./lista.js"));
var _modalContenedor = _interopRequireDefault(require("./modalContenedor.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var carrito, contenedor, lista, cantidad, modalContenedor;
function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito.productos));
}

// Función para cargar la lista de productos del carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
  var carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito.productos = JSON.parse(carritoGuardado);
  }
}
window.onload = function () {
  lista = new _lista.default();
  carrito = new _carrito.default();
  cargarCarritoDesdeLocalStorage();
  lista.agregar(new _producto.default({
    nombre: "Coca-cola",
    descripcion: "bebida",
    precio: 2000,
    imagen: "https://icons.iconarchive.com/icons/michael/coke-pepsi/72/Coca-Cola-Can-icon.png"
  }));
  lista.agregar(new _producto.default({
    nombre: "Americano",
    descripcion: "Cafe negro",
    precio: 6000,
    imagen: "https://icons.iconarchive.com/icons/martin-berube/food/128/coffee-icon.png"
  }));
  lista.agregar(new _producto.default({
    nombre: "Soda de fresa",
    descripcion: "bebida fria",
    precio: 12000,
    imagen: "https://icons.iconarchive.com/icons/sonya/swarm/128/Juice-icon.png"
  }));
  var productosContainer = document.getElementById("productos");
  contenedor = new _contenedor.default();
  contenedor.ref = productosContainer;
  contenedor.pintarDatos(lista.productos);
  var btnsMenos = document.querySelectorAll('.btn-menos');
  var btnsMas = document.querySelectorAll('.btn-mas');
  var cantidadInputs = document.querySelectorAll('.cantidad input[type="text"]');
  var btnsAgregar = document.querySelectorAll('.btn_agregar');
  btnsMenos.forEach(function (btnMenos, index) {
    btnMenos.addEventListener('click', function (event) {
      cantidad = parseInt(cantidadInputs[index].value);
      cantidad = cantidad > 1 ? cantidad - 1 : 1;
      cantidadInputs[index].value = cantidad;
    });
  });
  btnsMas.forEach(function (btnMas, index) {
    btnMas.addEventListener('click', function (event) {
      cantidad = parseInt(cantidadInputs[index].value);
      cantidad++;
      cantidadInputs[index].value = cantidad;
    });
  });
  btnsAgregar.forEach(function (btnAgregar) {
    cantidad = 1;
    btnAgregar.addEventListener("click", function (event) {
      var index = event.target.attributes[2].value;
      cantidad = parseInt(cantidadInputs[index].value);
      var obj = lista.productos[index];
      obj['cantidad'] = cantidad;
      var precio = cantidad * obj['precio'];
      obj['total'] = precio;
      console.log(precio);
      console.log(cantidad);
      carrito.agregar(obj);
      console.log(carrito.productos);
      guardarCarritoEnLocalStorage();
      alert("Producto agregado");
    });
    var totalees = carrito.calcularTotal();
    console.log(totalees);
  });
  var btnsEliminar;
  function openModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("container").style.display = "none";
    var productosContainer = document.getElementById("carrito");
    productosContainer.innerHTML = '';
    modalContenedor = new _modalContenedor.default();
    modalContenedor.ref = productosContainer;
    modalContenedor.pintarDatos(carrito.productos);
    btnsEliminar = document.querySelectorAll('.btn_eliminar');
    var totalinput = document.querySelector('.total_input');
    totalinput.value = carrito.calcularTotal();
    btnsEliminar.forEach(function (btnEliminar) {
      btnEliminar.addEventListener("click", function (event) {
        var producto = event.target.className;
        var productoExistente = carrito.productos.find(function (p) {
          return p.nombre === producto;
        });
        console.log(productoExistente);
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
};
},{"./producto.js":"js/producto.js","./carrito.js":"js/carrito.js","./contenedor.js":"js/contenedor.js","./lista.js":"js/lista.js","./modalContenedor.js":"js/modalContenedor.js"}],"../../../.nvm/versions/node/v20.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43275" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v20.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map