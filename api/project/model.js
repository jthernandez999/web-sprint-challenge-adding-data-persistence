// build your `Project` model here
const e = require('express')
const db = require('../../data/dbConfig')

const mappers = require('../../data/helpers/mappers')



function getAll(){
    let query = db('projects')
    return query
        .then(projects => {
            return projects.map(project => mappers.projectToBody(project))
        })
    
}
function getById(project_id) {
    return db('projects').where('project_id', project_id).first()
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(([project_id ]) => getById(project_id))
}

function getProjectTasks(project_id) {
    return db('tasks')
        .where('project_id', project_id) 
        .then(tasks => tasks.map(task => mappers.taskToBody(task)))
}

module.exports = {
    getAll,
    insert,
    getProjectTasks
}