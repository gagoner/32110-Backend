const express = require('express');
const app = express();
const port = 8080;
const Container = require('./contenedor')
const newProduct = new Container('producto.txt')

const server = app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en el servidor ${error}`))

app.get('/', async (req, res) => {
    res.send(`
    <p>Enlaces del desafío:</p>
    <ol>
        <li>
            <a href="https://32110-backend.glitch.me/productos">Productos</a>
        </li>
        <li>
            <a href="https://32110-backend.glitch.me/productoRandom">Producto Random</a>
        </li>
    </ol>
        `)
})

app.use(express.json())

app.get('/productos', async (req, res) => {
    try {
        const result = await newProduct.getAll()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.get('/productoRandom', async (req, res) => {
    const data = await newProduct.getAll()
    const random = Math.floor(Math.random() * data.length)
    res.send(await newProduct.getById(parseInt(random + 1)))
})
