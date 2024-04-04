class Almacenamiento{
    constructor(obj){
        this.datos = [];
        this.dato = obj.dato;
        this.numeros = obj.numeros;
    }

    guardar(ref){
    if(ref.dato.value != "")
    {
        ref.datos.push(dato.value);
        ref.dato.value = "";
        localStorage.setItem("Datos", JSON.stringify(datos));
        ref.agregarNumeros(ref.datos);
    }
    }

    agregarNumeros(arreglo){
    let html = "";
    for(var i in arreglo)
    {
        html += `<option>${arreglo[i]}</option>`;

    }
    this.numeros.innerHTML = html;
    }
    }