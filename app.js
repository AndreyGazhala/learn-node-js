const http = require('http');
const routes = require('./routes_handler');
const HOST = 'localhost';
const PORT = 3000;

const server = http.createServer(routes.routesHandler);

server.listen(PORT, () => {
    const a = [{
        a:1
    }]
    console.log(`Server running at http://${HOST}:${PORT}/`);
});