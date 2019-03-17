var http = require('http')
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var JsonObjects = {
        name: 'Sherlock',
        age: 20,
        Designation: 'Private Detective'
    }
    res.end(JSON.stringify(JsonObjects))
})
server.listen(3003, '127.0.0.1')
console.log('Json Server')