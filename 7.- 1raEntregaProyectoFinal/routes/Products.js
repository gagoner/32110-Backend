const express = require("express")
const router = express.Router()
const fs = require("fs")
const app = express()


router.get("/", (req, res) => {

    res.json({"admin":admin})

})

router.get("/productos", (req, res) => {

    fs.readFile("./data/productos.json", "utf-8", (err, products) => {
        
        if (err) {
            fs.writeFileSync("./data/productos.json", JSON.stringify([]))
            res.json(JSON.parse([{"timestamp":"[24/7/2022 19:33:21]","title":"Goose","price":0,"thumbnail":"","stock":"0","id":1}]))
        }else{
            res.json(JSON.parse(products))
        }
    })

})

router.get("/productos/:id", (req, res) => {
    const { id } = req.params

    fs.readFile("./data/productos.json", "utf-8", (err, products) => {
        
        if (err) {
            res.send(err)
        }else{
			const dataParsed = JSON.parse(products)
			const getProduct = dataParsed.findIndex((product => product["id"] === parseInt(id)))
			res.json(dataParsed[getProduct] || {"title":undefined})
        }
    })
})

//ADMIN REQ
const admin = true

function isAdmin(req, res, next) {
    if (admin) {
        next()
    } else {
    res.json({"err":"admin required"})
    }
}

router.post("/productos", isAdmin, (req, res) => {

    const {title, price, thumbnail, detail, stock } = req.body

    const d = new Date()
    const date = `[${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`

    fs.readFile("./data/productos.json", "utf-8", (err, products) => {
        
        if (err) {
            const product = {"timestamp": date, "title": title, "price": parseInt(price), "thumbnail": thumbnail, "detail": detail, "stock": stock, "id": 1}

            fs.writeFileSync("./public/productos.json", JSON.stringify([product]))

            // res.redirect(req.get('referer') + "admin");

            res.json({success:true, product:product})


        }else{
            const dataParsed = JSON.parse(products)
            const product = {"timestamp": date, "title": title, "price": parseInt(price), "thumbnail": thumbnail, "detail": detail, "stock": stock, "id": dataParsed.length + 1}
            dataParsed.push(product)

            fs.writeFileSync("./data/productos.json", JSON.stringify(dataParsed))
            
            // res.redirect(req.get('referer') + "admin");
            
            res.json({success:true, product:product})

        }
    })  
    
})

router.put("/productos/:id", isAdmin, (req, res) => {
    
    const { id } = req.params
    const {title, price, thumbnail, detail, stock } = req.body

    const d = new Date()
    const date = `[${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`

    fs.readFile("./data/productos.json", "utf-8", (err, products) => {
        
        if (err) {
            res.send(err)
        }else{
            const dataParsed = JSON.parse(products)
            const getProduct = dataParsed.findIndex((product => product["id"] === parseInt(id)))

            if (getProduct > -1) {
                
                const product = dataParsed[getProduct]

                if (title) {
                    product["title"] = title
                }

                if (price) {
                    product["price"] = price
                }

                if (thumbnail) {
                    product["thumbnail"] = thumbnail
                }

                if (detail) {
                    product["detail"] = detail
                }

                if (stock) {
                    product["stock"] = stock
                }

                product["timestamp"] = date

                const newText = JSON.stringify(dataParsed)
                fs.writeFileSync("./data/productos.json", newText)

                res.json({success:true})

            }else{
                res.json({success:false, err:"ID no existe."})
            }
        }
    })

})

router.delete("/productos/:id", isAdmin, (req, res) => {

    const { id } = req.params

    fs.readFile("./data/productos.json", "utf-8", (err, products) => {
        
        if (err) {
            res.send("err")
        }else{
            const dataParsed = JSON.parse(products)
            const getProduct = dataParsed.findIndex((product => product["id"] === parseInt(id)))

            if (getProduct > -1) {
                dataParsed.splice(getProduct, 1)

                const newText = JSON.stringify(dataParsed)
                fs.writeFileSync("./data/productos.json", newText)

                res.json({success:true})

            }else{
                res.json({success:false, err:"ID no existe."})
            }
        }
    })

})

module.exports = router