import { knex } from '../../db.js';

const productos = [

    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Product title 1',
        price: 1000,
        description: 'Product description 1',
        code: 'P-1',
        image: 'URL1',
        stock: 10
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Product title 2',
        price: 2000,
        description: 'Product description 2',
        code: 'P-2',
        image: 'URL2',
        stock: 20
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Product title 3',
        price: 3000,
        description: 'Product description 3',
        code: 'P-3',
        image: 'URL3',
        stock: 30
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Product title 4',
        price: 4000,
        description: 'Product description 4',
        code: 'P-4',
        image: 'URL4',
        stock: 40
    },
]

const carritos = [
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
]

const productoCarritoRelations = [
    {
        carritoId: 2,
        productoId: 1
    },
    {
        carritoId: 2,
        productoId: 2
    },
    {
        carritoId: 2,
        productoId: 3
    }
]

export async function populateProducts() {
    try {
        await knex.insert(productos).from('producto');
        console.log('Produc added to table')
    } catch (error) {
        console.log(error);
    } 
}

export async function populateCarts() {
    try {
        await knex.insert(carritos).from('carrito');
        console.log('Carts added to table')
    } catch (error) {
        console.log(error);
    } 
}

export async function populateProductoCarrito() {
    try {
        await knex.insert(productoCarritoRelations).from('productoCarrito');
        console.log('Added to table')
        return;
    } catch(error) {
        console.log(error);
    }
}