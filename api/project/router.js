// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const Mappers = require('../../data/helpers/mappers')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})


router.post('/', (req, res, next) => {
    const newProject = req.body
    Project.insert(newProject)
        .then(project => {
            if(!project.project_name){
                res.status(400).json({
                    message: 'project_name required', 
                })
            } else {
                res.status(201).json({
                    ...project,
                    project_completed: Mappers.intToBoolean(project.project_completed),
                })
            }
        })
        .catch(next)
})


router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something went terribly wrong',
        message: err.message, 
        stack: err.stack,
    })
})

module.exports = router 