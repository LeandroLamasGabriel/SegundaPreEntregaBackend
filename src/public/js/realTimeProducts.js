const socket = io()
let producto = document.getElementById("producto")
let cantidad = document.getElementById("stock")
let agregar = document.getElementById("submit")
let products = [
    {"title": "i7 8700k","stock": 32},
    {"title": "rx 570","stock": 15},
    {"title": "kingston 32gb","stock": 12}
]
socket.emit("message", products)

agregar.addEventListener("click", () => {
    let log = document.getElementById("realProducts")
    products.push({title: producto.value, stock: cantidad.value})
    socket.emit("message", products)
    log.innerHTML = ""
})
socket.on("allProducts", data => {
    let log = document.getElementById("realProducts")
    console.log(data, data.length)
    data.forEach(product => {
        for (let i = 0; i < data[0].length; i++) {
            log.innerHTML = log.innerHTML + "Producto: " + product[i].title + "  Stock: " + product[i].stock + `<br>`
        }
    })
})