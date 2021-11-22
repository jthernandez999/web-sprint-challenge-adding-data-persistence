// build your `Task` model here
// build your `Resource` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

function get(task_id) {
    let query = db('tasks') 
    // .leftJoin('projects as p')
    // .select('tasks.*', 'p.project_name', 'project_description')
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
                return get(task_id)
            })
}



module.exports = {
    insert,
    get,
}