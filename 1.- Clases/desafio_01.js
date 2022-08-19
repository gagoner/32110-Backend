class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return ` ${this.nombre} ${this.apellido}
        `;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        return this.libros.push({nombre: titulo, autor: nombreAutor});
    }

    getBookNames() {
        return this.libros.map( (libro) => libro.nombre);
    }
}

const libros = [
    {
        nombre: "Fundación",
        autor: "Isaac Asimov"
    },
    {
        nombre: "Cosmos",
        autor: "Carl Sagan"
    }

]

const usuario = new Usuario("Pablo", "Mármol", libros ,["Dino", "Snowball"]);

console.log(usuario.countMascotas()); //Devuelve 2

console.log(usuario.getBookNames()); // [ 'Fundación', 'Cosmos' ]

console.log(usuario.getFullName()); // Pablo Mármol

usuario.addBook("Fundación e Imperio", "Isaac Asimov")
console.log(usuario.getBookNames());

usuario.addMascota('Canario');
console.log(usuario.countMascotas());