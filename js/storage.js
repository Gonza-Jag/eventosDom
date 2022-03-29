
const guardarDatos = ()=> {
    const datosForm = {inputNombre: "" , inputTelefono: 0, inputEmail: ""}
    datosForm.inputNombre = inputNombre.value
    datosForm.inputTelefono = inputTelefono.value
    datosForm.inputEmail = inputEmail.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se ha almacenado el array en Local Storage.")

}

   
   
   const recuperoDatos = ()=> {
       if (localStorage.getItem("datosDelForm") != null){
        datosdelForm = JSON.parse(localStorage.getItem("datosDelForm"))
        inputNombre.value = datosdelForm.inputNombre
        inputTelefono.value = datosdelForm.inputTelefono
        inputEmail.value = datosdelForm.inputEmail
       }
   }


const limpiarDatos = ()=> {
    const resp = confirm("¿Desea eliminar los //datos almacenados?")
          if (resp) {
              localStorage.clear()
             console.log("se han eliminado todos los datos.")
          }
}






btnSubmit.addEventListener("click", guardarDatos)

   recuperoDatos()

