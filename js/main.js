const cargoTabla = (arr)=> {
    let detalleTabla = ""
    arr.forEach(productos => {
        detalleTabla += `<tr>
        <td style="cursor:pointer" onclick="productoOnClick(this.innerHTML)" id="producto">${productos.producto}</td>
        <td>${productos.stock}</td>
     </tr>`
    })
    tbody.innerHTML = detalleTabla
}

const tablaCarrito = (arr)=> {
    let detalleCarrito = ""
    arr.forEach(producto => {
        detalleCarrito += `<ul>
        <li id="productoCarrito">${producto}</li>
     </ul>`
    })
    listadoCarrito.innerHTML = detalleCarrito
}

var carritoActual = [];

tablaCarrito(carritoActual)

function productoOnClick(producto) {
    console.log(producto)
    carritoActual.push(producto)
    tablaCarrito(carritoActual)
  };



const obtenerDatos = ()=>{
    fetch(URL)
              .then((response)=>  response.json())
              .then((data)=>{arrayRanking = data})
              .catch(error =>  arrayRanking = [{producto: "error :(", stock: "",}])
                 
                 .finally(()=> cargoTabla(arrayRanking))
                  
              }
              

document.addEventListener("DOMcontentLoaded", obtenerDatos())

Swal.fire({
    position: 'bottom',
icon: 'success',
title: 'Bienvenidos a El Gringo',
showConfirmButton: false,
timer: 1500

})



 
    


const cargarProductos = ()=>{
    for (herramAmostrar of productos) {
        const liProducto = document.createElement("li")
        liProducto.className = "collection-item"
        liProducto.innerText = herram
        liProducto.setAttribute("onclick", `agregarAlCarrito('${herram}')`)
        items.append(liProducto)
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













