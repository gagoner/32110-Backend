const express = require('express')
const app = express()
const apiRouter = require('./routes/api.routes')
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static(__dirname + '/public'))

app.use('/api', apiRouter)

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error en el servidor ${error}`)
    } else {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`)
    }
})