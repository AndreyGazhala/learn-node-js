const http = require('http');
const routes = require('./routes_handler');
const HOST = 'localhost';
const PORT = process.env.PORT || 3030;

const server = http.createServer(routes.routesHandler);

server.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
