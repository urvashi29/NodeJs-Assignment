var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
myReadStream.on('data', (dataBlock) => {
    console.log(dataBlock)
})
var server = http.createServer((req, res) => {
    res.writeHead(800, { 'Content-type': 'text/plain' })
    res.end('Fetching Data From Readme.txt')
})
server.listen(3002, '127.0.0.1')
console.log('Readable Buffer')