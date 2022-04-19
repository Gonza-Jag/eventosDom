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

Swal.fire({
    position: 'bottom',
icon: 'success',
title: 'Bienvenidos a El Gringo',
showConfirmButton: false,
timer: 1500

})



 
    