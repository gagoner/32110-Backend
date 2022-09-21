const express = require('express')
const app = express()
// const apiRouter = require('./routes/api.routes')
// const { engine } = require('express-handlebars')
// const path = require('path')
const PORT = process.env.PORT || 8080

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.engine(
//     'handlebars',
//     engine({
//         extname: 'hbs',
//         defaultLayout: 'main.hbs',
//         layoutsDir: path.resolve(__dirname, './views/layouts'),
//         partialsDir: path.resolve(__dirname, './views/partials')
//     })
// )
// app.set('view engine', 'handlebars')
// app.set('views', './views/')

// app.use(express.static('public'))

// app.use('/', apiRouter)

app.get('/', (req, res) => {
    res.send("Hello Desafío Coder!!!")
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Server error ${error}`)
    } else {
        console.log(`Server running on port ${PORT}`)
    }
})