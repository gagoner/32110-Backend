const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

const productsRouter = require("./routes/Products")
const cartRouter = require("./routes/Cart")

app.use("/api", productsRouter)
app.use("/api/carrito", cartRouter)

app.use(function(req, res, next){
    res.status(404);
    res.send("...huh?");
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error en el servidor ${error}`)
    } else {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`)
    }
})