
const cargarProductos = ()=>{
    for (herram of productos) {
        const liProducto = document.createElement("li")
        liProducto.className = "collection-item"
        liProducto.innerText = herram
        liProducto.setAttribute("onclick", `agregarAlCarrito('${herram}')`)
        listadoHerramientas.append(liProducto)
    }

}

const agregarAlCarrito = (prod)=>{
    if (prod.trim() > "") {

        const liCarrito = document.createElement("li")
        liCarrito.className = "collection-item italica-carrito"
        liCarrito.innerText = prod
        listadoCarrito.append(liCarrito)
    }
}
 

    function alerta() {
        Swal.fire({title: "Saludos", text: "Bienvenidos a 'El Gringo'", icon: "success", confirmButtonText: "Puede seguir con su compra"})

    }


    cargarProductos()
    alerta()