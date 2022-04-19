
const productos = ['Martillo', 'Pinza', 'Clavos', 'Lijas', 'Tornillos', 'Pinceles', 'Cables', 'Balde de pintura', 'Alargue', 'Focos']

const carrito = []

const listadoHerramientas = document.getElementById("listadoHerramientas")
const listadoCarrito = document.getElementById("listadoCarrito")
const inputFiltrar = document.querySelector("#filtrar")

const tbody = document.querySelector("tbody")

const btnCarrito = document.querySelector("a")




//VARIABLES NUEVAS

let herramAmostrar = ""
let contenidoJson =[]

const URL = "js/productos.json"