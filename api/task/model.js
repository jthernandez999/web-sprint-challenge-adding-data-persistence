// build your `Task` model here
// build your `Resource` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

// function getAll() {
//     return db('tasks')
// }

// function getById(task_id) {
//     return db('tasks').where('task_id', task_id).first()
// }

function get(task_id) {
    let query = db('tasks') 
    if(task_id) {
        return query 
            .where('task_id', task_id)
            .first()
            .then((task) => {
                if(task) {
                    return mappers.taskToBody(task)
                } else {
                    return null
                }
            })
    } else {
        return query.then((tasks) => {
            return tasks.map((task) => mappers.taskToBody(task))
        })
    }
}

function insert(task) {
    return db('tasks')
        .insert(task)
            .then(([task_id]) => {
                return getById(task_id)
            })
}



module.exports = {
    // getAll, 
    // getById,
    insert,
    get,
}