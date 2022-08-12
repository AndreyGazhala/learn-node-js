const users = require('./users');

const routesHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    switch (method) {
        case 'GET':
            if (url === '/') {
                res.setHeader('Content-Type', 'text/html');
                res.write('<!doctype html>');
                res.write('<html lang="en">');
                res.write('<head></head>');
                res.write('<body>');
                res.write('<h2>HTTP Server</h2>');
                res.write('<h2>You can create a new user</h2>');
                res.write('<form action="http://localhost:3000/add_new_user" method="post">');
                res.write('<input type="text" name="name">');
                res.write('<input type="submit" value="Submit"></input>');
                res.write('</form>');
                res.write('</body>');
                res.write('</html>');
                res.end();
            } else if (url === '/users') {
                res.setHeader('Content-Type', 'text/html');
                res.write('<!doctype html>');
                res.write('<html lang="en">');
                res.write('<head></head>');
                res.write('<body>');
                res.write('<h2>Users page</h2>');
                res.write('<ul>');
                for (const user of users) {
                    res.write(`<li>ID: <b>${user.id}</b>, Name: <b>${user.name}</b></li>`);
                }
                res.write('</ul>');
                res.write('</body>');
                res.write('</html>');
                res.end();
            }
            break;
        case 'POST': 
            if (url === '/add_new_user') {
                const body = [];
                req.on('data', (chunk) => {
                    body.push(chunk);
                });
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    console.log(parsedBody.split('=')[1]);
                });
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            }
            break;
        default: 
            console.log(3);
    }
}

module.exports = {
    routesHandler
};