// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.get()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const newTask = req.body
    Task.insert(newTask)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the task router', 
        message: err.message, 
        stack: err.stack,
    })
})
module.exports = router 