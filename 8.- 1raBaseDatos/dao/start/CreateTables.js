import { knex } from '../../db.js';

export async function createProductoTable() {
    try {
        const isCreated = await knex.schema.hasTable('productos');
        if(isCreated) {
            console.log('Product table exist')
        } else {
            await knex.schema.createTable('producto', (table) => {
                table.increments('id').primary().notNullable(),
                table.timestamp('timestamp').notNullable(),
                table.string('title', 100).notNullable(),
                table.float('price').notNullable(),
                table.string('description', 300),
                table.string('code').unique(),
                table.string('image', 200),
                table.integer('stock').notNullable()
            })
            console.log('Product table created')
        }
    } catch (error) {
        console.log(error);
    }
}

export async function createCarritoTable() {
    try {
        const isCreated = await knex.schema.hasTable('carrito');
        if (isCreated) {
            console.log('Cart tableexist')
        } else {
            await knex.schema.createTable('carrito', (table) => {
                table.increments('id').primary().notNullable(),
                table.timestamp('timestamp').notNullable()
            })
            console.log('Cart table created')
        }
    } catch (error) {
        console.log(error);
    }
}

export async function createProductoCarritoTable() {
    try {
        const isCreated = await knex.schema.hasTable('productoCarrito');
        if (isCreated) {
            console.log('productCart table exist')
        } else {
            await knex.schema.createTable('productoCarrito', (table) => {
                table.increments('id').primary().notNullable(),
                // <FK carrito>
                table.integer('carritoId').unsigned().notNullable(),
                table.foreign('carritoId').references('id').inTable('carrito').onDelete('CASCADE'),
                // <FK producto>
                table.integer('productoId').unsigned().notNullable(),
                table.foreign('productoId').references('id').inTable('producto').onDelete('CASCADE')
            })
            console.log('productCart created')
        }
    } catch (error) {
        console.log(error);
    }
    
}