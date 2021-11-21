const projects = [
    { project_name: 'Build a Recipe Book', project_description: 'How to build a recipe book', project_completed: true},
    { project_name: 'Create a Website', project_description: 'How to build a website', project_completed: false},
    { project_name: 'Car Oil Change', project_description: 'How to change the oil on your car', project_completed: true},
]

const resources = [
    { resource_name: 'Family Recipes', resource_description: 'A collection of family recipes passed down from generation to generation'},
    { resource_name: 'Bloom Institue of Technology', resource_description: 'Intensive computer science and software engineering training. Learn computers, software engineering and web development top to bottom.'},
    { resource_name: 'Youtube', resource_description: 'Online video resource library'},
]

const project_resources = [
    { project_id: 1, resource_id:1  },
    { project_id: 2, resource_id:2  },
    { project_id: 3, resource_id:3  },
]

const tasks = [
    // Build a Recipe Book 
    { task_description: 'Gather recipes', task_notes: 'Gather recipes from family members', task_completed: true, project_id: 1 },
    { task_description: 'Organize', task_notes: 'Organize by type and date', task_completed: true , project_id: 1 },
    { task_description: 'Publish', task_notes: 'Type up and publish', task_completed: true , project_id: 1},

    // Create a website
    { task_description: 'Create a design', task_notes: 'Scaffold the structure of the website', task_completed: true , project_id: 2 },
    { task_description: 'Build the front-end', task_notes: 'Make sure the front end is functional', task_completed: true , project_id: 2 },
    { task_description: 'Build the back-end', task_notes: 'Make sure the back end is functional', task_completed: true , project_id: 2},
    { task_description: 'Connect the back-end to the front-end', task_notes: 'Make sure the front-end is functional with the back-end', task_completed: true , project_id: 2},
    { task_description: 'Deploy the website', task_notes: 'Deploy a functional website', task_completed: true , project_id: 2},
    
    // Car oi change
    { task_description: 'Buy the necessary supplies', task_notes: 'Buy the correct oil and filter', task_completed: true , project_id: 3},
    { task_description: 'Empty the oil', task_notes: 'Empty out the oil and remove the oil filter', task_completed: true , project_id: 3},
    { task_description: 'Refill with oil', task_notes: 'Refill with oil and replace with new filter', task_completed: true , project_id: 3},
    

]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}