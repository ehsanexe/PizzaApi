const express = require('express')
const router = express.Router()
const pizzas = require('./models/pizzaModel')


// return all
router.get('/', async (req,res) => {
    try{
        const pizzaData = await pizzas.find()
        res.json(pizzaData)
    }
    catch(err){
        res.json({message: err})
    }
})

//submit
router.post('/',async (req,res) => {
    const pizza = new pizzas({
        title: req.body.title,
        description: req.body.description,
        size: req.body.size,
        price: req.body.price
    })

    try{
    const savedPizza = await pizza.save()
    res.json(savedPizza)
    }
    catch(err){
        res.json({message: err})
    }
})

//find by id
router.get('/:id', async (req,res) => {
    try{
        const pizzaData = await pizzas.findById(req.params.id)
        res.json(pizzaData)
    }
    catch(err){
        res.json({message: err})
    }
})

//delete
router.delete('/:id', async (req,res) => {
    try{
        const deletePizza = await pizzas.remove({_id: req.params.id})
        res.json(deletePizza)
    }
    catch(err){
        res.json({message: err})
    }
})

//update
router.patch('/:id', async (req,res) => {
    try{
        const updatePizza = await pizzas.updateOne(
            {_id: req.params.id},
             {title: req.body.title, 
                description: req.body.description,
                size: req.body.size,
                price: req.body.price})
        res.json(updatePizza)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router