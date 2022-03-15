const cargarProductos = ()=>{
    for (herram of productos) {
        let itemList = "<li class='collection-item'>" + herram + "</li>"
        listadoHerramientas.innerHTML += itemList

    }

}
cargarProductos()