const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema({
    title: {type: String,requireed: true},
    description: {type: String,requireed: true},
    size: {type: String,requireed: true},
    price: {type: String,requireed: true},
})

module.exports = mongoose.model('pizzas',pizzaSchema)