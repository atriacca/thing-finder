const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middlewares for every request Naga Sadow
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))

// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/carList", {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})

// Routes - Endpoints
app.use("/carList", require('./routes/carRouter.js'))

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


/*
// GET ALL - GET COLLECTION
app.get("/carList", (req, res) => {
    res.send(carList)
})
*/

/*
// GET ONE - GET SINGLE RESOURCE
app.get("/carList/:_id", (req, res) => {
    // Find the carList with this ID in the fake DB
    const foundcarList = carList.find(carList => carList._id === req.params._id)
    // Send single carList resource(object) to front-end
    res.send(foundcarList)
})
*/

/*
// POST - INSERT ONE
app.post("/carList", (req, res) => {
    // Get user's post object out of req.body
    const newcar = req.body
    // Add ID to newcar
    newcar._id = uuidv4() // uuidv4() must NOT be in Postman
    // Add newcar to Fake DB
    carList.push(newcar)
    // Send back updated DB
    res.send(carList)
})
*/

/*
// DELETE - Delete One
app.delete("/carList/:_id", (req, res) => {
    // Find the car to delete
    const carToDelete = carList.find(car => car._id === req.params._id)
    // Created updated array that does not include that car object
    const updatedDB = carList.filter(car => car._id !== carToDelete._id)
    // Re-assign database to be the updated array
    carList = updatedDB
    res.send(carList)
})
*/

/*
// PUT - Update One
app.put("/carList/:_id", (req, res) => {
    // Find the car to update by their id
    const carToUpdate = carList.find(car => car._id === req.params._id)
    // Update object with req.body to get updated car
    const updatedcar = Object.assign(carToUpdate, req.body)
    // Map through old DB and replace old object with updated Object
    const updatedDB = carList.map(car => car._id === updatedcar._id ? updatedcar : car)
    //  Update Database array
    carList = updatedDB
    // Send back updated DB
    res.send(carList)
})
*/

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})