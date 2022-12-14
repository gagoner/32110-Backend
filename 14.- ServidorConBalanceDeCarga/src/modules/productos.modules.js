import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 1000
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 2000
    },
    code: {
        type: String,
        required: true,
        max: 3000,
        unique: true
    },
    image: {
        type: String,
        max: 4000
    },
    stock: {
        type: Number,
        required: true,
        max: 5000
    }
})

export const ProductosModel = mongoose.model("productos", Schema);