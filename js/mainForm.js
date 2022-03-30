
const focoEnInput = ()=>{
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if(campo.type != "submit")
        campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
        campo.addEventListener("blur", ()=> campo.className = (""))
    }

}

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los campos antes de Enviar el formulario."
})

btnSubmit.addEventListener("click", ()=> {
    
    Swal.fire({
        position: 'bottom',
  icon: 'success',
  title: 'Su pedido se realizo con éxito',
  showConfirmButton: false,
  timer: 1500

    })
})



focoEnInput()


