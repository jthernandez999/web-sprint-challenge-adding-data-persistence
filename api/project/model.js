// build your `Project` model here
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

module.exports = {
    getAll,
    insert,
}