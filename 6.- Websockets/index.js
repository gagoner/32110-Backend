const express = require('express')
const { Server } = require('socket.io')
const handlebars = require('express-handlebars')
const apiRouter = require('./routes/api.routes')
const chatRouter = require('./routes/chat.router')
const Manager = require('./controllers/chat.manager')
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(`Server error ${error}`)
    } else {
        console.log(`Server running on port ${PORT}`)
    }
})
const manager = new Manager()
const io = new Server(server)
let products = require('./models/product.model')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())

app.set('view engine', 'handlebars')
app.set('views', './views/')

app.use('/content', express.static('./public'))

app.use('/products', apiRouter)
app.use('/chat', chatRouter)

app.get('/', (req, res) => {
    res.render('create-product')
})

io.on('connection', socket => {
    console.log(`Client ${socket.id} connected...`)
    socket.emit('history', products)
    manager.findAll().then(result => socket.emit('chatHistory', result))
    socket.on('products', data => {
        io.emit('history', data)
    })
    socket.on('chat', data => {
        io.emit('chatHistory', data)
    })
})