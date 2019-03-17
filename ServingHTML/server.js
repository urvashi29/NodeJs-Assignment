var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var readHtmlStream = fs.createReadStream(__dirname + '/index.html')
    readHtmlStream.pipe(res)
});
server.listen(3000, '127.0.0.1')
console.log('Listening to port 3000 port')