
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








focoEnInput()
