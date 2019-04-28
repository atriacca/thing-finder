const express = require('express')
const carRouter = express.Router()
const Car = require('../models/car.js')


// GET All
carRouter.get("/", (req, res, next) => {
    Car.find((err, cars) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cars)
    })
})
//carRouter.get("/", (req, res, next) => {
    // res.status(200)
    // next(cars)
//})

// POST one
carRouter.post("/", (req, res, next) => {
    const newCar = new Car(req.body)
    newCar.save((err, newSavedCar) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedCar)
    })
})
//carRouter.post("/", (req, res, next) => {
    // const newCar = res.body
    // newCar._id = "2"
    // cars.push(newCar)
    // res.status(201)
    // next(newCar)
//})


module.exports = carRouter
// Fake DB:
// const cars = [
//     {
//         name: "Jon Snow",
//         house: "Winterfell",
//         isAlive: "true",
//         _id: "1"
//     }
// ]

// GET All
//carRouter.get("/", (req, res, next) => {
    // res.status(200)
    // next(cars)
//})

// POST one
//carRouter.post("/", (req, res, next) => {
    // const newCar = res.body
    // newCar._id = "2"
    // cars.push(newCar)
    // res.status(201)
    // next(newCar)
//})