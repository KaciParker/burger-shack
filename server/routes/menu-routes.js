var Drinks = require('../models/drink')
var Burgers = require('../models/burger')
var Sides = require('../models/side')
var router = require('express').Router()

router.get('/api/menu', (req, res, next) => {
    Promise.all([
        Burgers.find({}).select('name price'),
        Drinks.find({}).select('name sizes'),
        Sides.find({}).select('name price')
    ])
        .then(results => res.send({
            burgers: results[0],
            drinks: results[1],
            sides: results[2]
        }))
        .catch()
})



// router.get('/api/menu', (req, res, next) => {
//     Burgers.find({})
//         .then(burgers => {
//             Sides.find({})
//                 .then(sides => {
//                     Drinks.find({})
//                         .then(drinks => {
//                             res.send({
//                                 burgers,
//                                 drinks,
//                                 sides
//                             })
//                         }).catch()
//                 }).catch()
//         }).catch()
// })




// Get request for ALL MENU
// router.get('/api/menu', (req, res, next) => {
//     var menu = {}
//     Drinks.find({}, { name: 1, sizes: 1 })
//         .then(drinks => {
//             menu.drinks = drinks
//             Burger.find({}, { name: 1, sizes: 1 })
//                 .then(burgers => {
//                     menu.burgers = burgers
//                     Sides.find({}, { name: 1, price: 1 })
//                         .then(sides => {
//                             menu.sides = sides
//                             res.send(menu)
//                         })
//                         .catch(err => {
//                             res.status(400).send({ Error: err })
//                         })
//                         .catch(err => {
//                             res.status(400).send({ Error: err })
//                         })
//                         .catch(err => {
//                             res.status(400).send({ Error: err })
//                         })
//                 })
//         })
// })

// Function to send responses
// function handleResponse(action, data, error) {
//     var response = {
//         message: action,
//         data: data
//     }
//     if (error) {
//         response.error = error
//     }
//     return response
// }


module.exports = router