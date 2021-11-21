// build your `Resource` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

function getAll() {
    return db('resources')
}

function getById(resource_id) {
    return db('resources').where('resource_id', resource_id).first()
}

function insert(resource) {
    return db('resources')
        .insert(resource)
            .then(([resource_id]) => {
                return getById(resource_id)
            })
}



module.exports = {
    getAll, 
    getById,
    insert,
}