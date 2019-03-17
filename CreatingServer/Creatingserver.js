var http = require('http')
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Yippee! My first Server')
});

server.listen(3001, '127.0.0.1')
console.log('Listening to port 3001')
