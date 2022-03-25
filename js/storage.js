
const guardarDatos = ()=> {
    const datosForm = {nomb: "" , dni: 0}
    datosForm.nomb = nomb.value
    datosForm.dni = dni.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se ha almacenado el array en Local Storage.")

}

   
   
   const recuperoDatos = ()=> {
       if (localStorage.getItem("datosDelForm") != null){
        datosdelForm = JSON.parse(localStorage.getItem("datosDelForm"))
        nomb.value = datosdelForm.nomb
        dni.value = datosdelForm.dni
       }
   }


const limpiarDatos = ()=> {
    const resp = confirm("¿Desea eliminar los //datos almacenados?")
          if (resp) {
              localStorage.clear()
             console.log("se han eliminado todos los datos.")
          }
}






   guardar.addEventListener("click", guardarDatos)

   recuperoDatos()

