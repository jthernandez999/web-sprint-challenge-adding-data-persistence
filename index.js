// start your server here
require('dotenv').config()
const server = require('./api/server')

const port = process.env.port || 9000

server.listen(port, () => console.log(`\nAPI running on port ${port}!!`.bgBlue))