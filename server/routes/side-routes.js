var Sides = require('../models/side')
var router = require('express').Router()

// Get request for ALL SIDES
router.get('/api/sides', (req, res, next)=>{
    Sides.find({})
        .then(sides =>{
            res.send(sides)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

// Get request for SPECIFIC SIDES
router.get('/api/sides/:id', (req, res, next)=>{
    Sides.findById(req.params.id)
        .then(side=>{
            res.send(side)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

// Post request for ADDING SIDES
router.post('/api/sides', (req, res, next)=>{
    Sides.create(req.body)
        .then(side => {
            let response = {
                data: side,
                message: 'Successfully created Side!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

// Put request for UPDATING SIDES
router.put('/api/sides/:id', (req, res, next)=>{
    var action = 'Update Side'
    Sides.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(handleResponse(action, data))
        })
        .catch(err =>{
            res.status(400).send(handleResponse(action, null, err))
        })
})

// Delete request for DELETING SIDES
router.delete('/api/sides/:id', (req, res, next)=>{
    Sides.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that side'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

// Function to send responses
function handleResponse(action, data, error){
    var response =  {
        message: action,
        data: data
    }
    if(error){
        response.error = error
    }
    return response
}

module.exports = router