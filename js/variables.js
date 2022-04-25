

const carrito = []

const listadoHerramientas = document.getElementById("listadoHerramientas")
const listadoCarrito = document.getElementById("listadoCarrito")
const inputFiltrar = document.querySelector("#filtrar")

const tbody = document.querySelector("tbody")
const productos = document.getElementById("items")

const btnCarrito = document.querySelector("a")




//VARIABLES NUEVAS

let herramAmostrar = ""
let contenidoJson =[]

const URL = "js/productos.json"