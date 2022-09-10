const express = require('express')
const apiRouter = express.Router()

const productos = require('../controller/productos')

apiRouter.get('/productos', (req, res) => {
  res.status(200).json(productos.listarProducto)
})

apiRouter.post('/productos', (req, res) => {
  let toAdd = req.body
  let prod = productos.nuevoProducto(toAdd)
  res.status(201).json(prod)
})

apiRouter.get('/productos/:id', (req, res) => {
  let id = req.params.id
  res.status(200).json(productos.mostrarProducto(id))
})

apiRouter.put('/productos/:id', (req, res) => {
  let toChange = req.body
  let id = req.params.id
  res.status(200).json(productos.actualizarProducto(toChange, id))
})

apiRouter.delete('/productos/:id', (req, res) => {
  let id = req.params.id
  res.status(200).json(productos.eliminarProducto(id))
})

module.exports = apiRouter