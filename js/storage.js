
const guardarDatos = ()=> {
    const datosForm = {nomb: "" , dni: 0}
    datosForm.nomb = nomb.value
    datosForm.dni = dni.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se ha almacenado el array en Local Storage.")

}

   guardar.addEventListener("click", guardarDatos)

   const recuperoDatos = ()=> {
       if (localStorage.getItem("datosDelForm") != null){
        datosdelForm = JSON.parse(localStorage.getItem("datosDelForm"))
        nomb.value = datosdelForm.nomb
        dni.value = datosdelForm.dni
       }
   }

   recuperoDatos()

