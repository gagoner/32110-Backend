const express = require('express')
const app = express()
const apiRouter = require('./routes/api.routes')
const path = require('path')
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')
app.set('views', './views/')

app.use(express.static('public'))

app.use("/", apiRouter)

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error en el servidor ${error}`)
    } else {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`)
    }
})