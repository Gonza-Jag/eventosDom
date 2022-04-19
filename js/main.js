const cargoTabla = (arr)=> {
    let detalleTabla = ""
    arr.forEach(productos => {
        detalleTabla += `<tr>
        <td>${productos.producto}</td>
        <td>${productos.stock}</td>
     </tr>`
    })
    tbody.innerHTML = detalleTabla
    
}
const obtenerDatos = ()=>{
    fetch(URL)
              .then((response)=>  response.json())
              .then((data)=>{arrayRanking = data})
              .catch(error =>  arrayRanking = [{producto: "error :(", stock: "",}])
                 
                 .finally(()=> cargoTabla(arrayRanking))
                  
              }
                


document.addEventListener("DOMcontentLoaded", obtenerDatos())


    function alerta() {
        Swal.fire({title: "Saludos", text: "Bienvenidos a 'El Gringo'", icon: "success", confirmButtonText: "Puede seguir con su compra"})

    }


    cargarProductos()
    alerta()