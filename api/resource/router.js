// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getAll() 
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const newResource = req.body
    Resource.insert(newResource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router', 
        message: err.message, 
        stack: err.stack,
    })
})


module.exports = router