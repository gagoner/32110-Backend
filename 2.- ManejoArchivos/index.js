const Contenedor = require('./contenedor')
const newProduct = new Contenedor('producto.txt')

const showMenu = () => {
  setTimeout(() => {
    console.log(`
      Choose a method from "Contenedor":
      1. save
      2. getById
      3. getAll
      4. deleteById
      5. deleteAll
      6. exit
  `)
  }, 1000)
}
showMenu()

function menu() {
  let stdin = process.openStdin()

  stdin.addListener('data', function (d) {
    let chooseNumber = d.toString().trim()

    switch (chooseNumber) {
      case '1':
        const obj = {
          title: 'Dummy product',
          price: 1000,
          thumbnail: 'thumbnail.png'
        }
        newProduct.save(obj)
        showMenu()
        break

      case '2':
        const id = 1
        console.log(newProduct.getById(id))
        showMenu()
        break

      case '3':
        console.log(newProduct.getAll())
        showMenu()
        break

      case '4':
        const idDeleted = 1
        newProduct.deleteById(idDeleted)
        showMenu()
        break

      case '5':
        newProduct.deleteAll()
        showMenu()
        break

      case '6':
        process.exit(0)

      default:
        console.log('Error')
        process.exit(0)
    }
  })
}
menu()