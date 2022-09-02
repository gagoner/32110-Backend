const fs = require('fs')

class Contenedor {
  constructor(file) {
    this.file = file
  }

  async save(object) {
    try {
      const data = await fs.promises.readFile(`./${this.file}`, 'utf-8')
      const result = JSON.parse(data)
      const newData = [...result]
      const fill = {
        title: object.title,
        price: object.price,
        thumbnail: object.thumbnail,
        id: result.length + 1
      }
      newData.push(fill)
      await fs.promises.writeFile(`./${this.file}`, JSON.stringify(newData))
      return console.log('saved\n')
    } catch (err) {
      console.log('[save error]', err)
      await fs.promises.writeFile(`./${this.file}`, '[]')
      console.log('file created, try again\n')
    }
  }

  async getById(id) {
    try {
      const file = fs.readFileSync(`${this.file}`)
      const data = JSON.parse(file)
      return data.find((item) => item.id === id)
    } catch (err) {
      return err
    }
  }

  async getAll() {
    try {
      const file = fs.readFileSync(`./${this.file}`, 'utf-8')
      const data = JSON.parse(file)
      return data
    } catch (err) {
      return err
    }
  }

  deleteById(id) {
    try {
      const file = fs.readFileSync(`${this.file}`)
      const data = JSON.parse(file)
      const newData = data.filter((item) => item.id !== id)
      fs.writeFileSync(`${this.file}`, JSON.stringify(newData))
    } catch (err) {
      return err
    }
  }

  async deleteAll() {
    try {
      await fs.promises.unlink(`./${this.file}`)
      return 'deleted\n'
    } catch (error) {
      return `[delete error] ${error}`
    }
  }
}

module.exports = Contenedor;