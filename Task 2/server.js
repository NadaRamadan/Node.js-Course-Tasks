const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello from the server');

});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
