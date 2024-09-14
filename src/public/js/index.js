const socket = io()
let products = [
    {"title": "i7 8700k","stock": 32},
    {"title": "rx 570","stock": 15},
    {"title": "kingston 32gb","stock": 12}
]
socket.emit("message", products)

socket.on("allProducts", data => {
    let log = document.getElementById("allProducts")
    console.log(data, data[0].length)
    data.forEach(product => {
        for (let i = 0; i < data[0].length; i++) {
            log.innerHTML = log.innerHTML + "Producto: " + product[i].title + "  Stock: " + product[i].stock + `<br>`
        }
    })
})