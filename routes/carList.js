const express = require('express')
const carRouter = express.Router()
const uuid = require('uuid/v4')

// Fake DB
const cars = [
    {
        year: 2007,
        make: "BMW",
        model: "X3",
        color: "blue",
        price: 7000,
        _id: uuid()
    },
    {
        year: 2000,
        make: "Ford",
        model: "Explorer",
        color: "gold",
        price: 800,
        _id: uuid()
    }
]

// Get all
// carRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(cars)
// })

// Insert One - POST
// carRouter.post("/", (req, res) => {
//     const newCar = req.body
//     newCar._id = uuid()
//     cars.push(newCar)
//     res.status(201)
//     res.send(cars)
// })

carRouter.route("/")
    // Get all
    .get((req, res, next) => {
        res.status(200)
        res.send(cars)
    })
    // Insert One
    .post((req, res, next) => {
        const newCar = req.body
        newCar._id = uuid()
        cars.push(newCar)
        res.status(201)
        res.send(cars)
    })

// Get all by query
carRouter.get("/search", (req, res, next) => {
    // const price = req.query.price
    const price = req.query
    const filteredCars = cars.filter(car => {
        if(car.price >= price){
            return car
        }
    })
    res.status(200)
    res.send(filteredCars)
})

// Get One
carRouter.get("/:_id", (req, res, next) => {
    const foundCar = cars.find(car => car._id === req.params._id)
    res.status(200)
    res.send(foundCar)
})

module.exports = carRouter