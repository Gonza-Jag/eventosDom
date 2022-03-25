
const cargarProductos = ()=>{
    for (herram of productos) {
        const liProducto = document.createElement("li")
        liProducto.className = "collection-item"
        liProducto.innerText = herram
        liProducto.setAttribute("onclick", `agregarAlCarrito('${herram}')`)
        listadoHerramientas.append(liProducto)
    }

}
cargarProductos()

const agregarAlCarrito = (prod)=>{
    if (prod.trim() > "") {

        const liCarrito = document.createElement("li")
        liCarrito.className = "collection-item italica-carrito"
        liCarrito.innerText = prod
        listadoCarrito.append(liCarrito)
    }
}
 
let nombre = prompt("Ingrese su nombre")  
if((nombre == "") || (nombre == null)){
    alert("No ingresaste un nombre")
} 
else {
    alert("Bienvenidx "  + nombre)
}
    