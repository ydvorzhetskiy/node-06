const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Expires': '0'
    });
    fs.createReadStream('./index.html').pipe(res);
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server started!')
});
