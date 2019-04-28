const express = require('express')
const turtleRouter = express.Router()
const uuid = require('uuid/v4')

// Fake DB
const ninjaTurtles = [
    {
        name: "Raphael",
        weapon: "sais",
        color: "red",
        killCount: 1240,
        _id: uuid()
    },
    {
        name: "Donatello",
        weapon: "Staff",
        color: "purple",
        killCount: 140,
        _id: uuid()
    },
    {
        name: "Leonardo",
        weapon: "Swords",
        color: "blue",
        killCount: 5893,
        _id: uuid()
    },
    {
        name: "Michaelangelo",
        weapon: "Nun-chucks",
        color: "orange",
        killCount: 589,
        _id: uuid()
    }
]

// Get all
// turtleRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(ninjaTurtles)
// })

// Insert One - POST
// turtleRouter.post("/", (req, res) => {
//     const newTurtle = req.body
//     newTurtle._id = uuid()
//     ninjaTurtles.push(newTurtle)
//     res.status(201)
//     res.send(ninjaTurtles)
// })


turtleRouter.route("/")
    // Get all
    .get((req, res, next) => {
        res.status(200)
        res.send(ninjaTurtles)
    })
    // Insert One
    .post((req, res, next) => {
        const newTurtle = req.body
        newTurtle._id = uuid()
        ninjaTurtles.push(newTurtle)
        res.status(201)
        res.send(ninjaTurtles)
    })

// Get all by query
turtleRouter.get("/search", (req, res, next) => {
    // const killCount = req.query.killcount
    const {killcount: killCount} = req.query
    const filteredTurtles = ninjaTurtles.filter(turtle => {
        if(turtle.killCount >= killCount){
            return turtle
        }
    })
    res.status(200)
    res.send(filteredTurtles)
})

// Get One
turtleRouter.get("/:_id", (req, res, next) => {
    const foundTurtle = ninjaTurtles.find(turtle => turtle._id === req.params._id)
    res.status(200)
    res.send(foundTurtle)
})



module.exports = turtleRouter