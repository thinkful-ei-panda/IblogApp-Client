var http = require("http");


http.createServer(function (req, res) {
    response {
        response.writeHead(200,
            { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
        console.log(`Server listening at http://localhost:${PORT}`)


        const knex = require('knex')
        const app = require('./app')
        const { PORT, DB_URL } = require('./config');
        const { response } = require("../src/App");

        const db = knex({
            client: 'pg',
            connection: DB_URL,
        })

        app.set('db', db)

        app.listen(3001, () => {
            console.log(`Server listening at http://localhost:${PORT}`)
        })
