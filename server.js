const https = require('https');
const fs = require('fs');

const httpsOptions = {
    key: fs.readFileSync('./cert.key'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'hello'
};

const server = https.createServer(httpsOptions, (req, res) => {
    res.writeHead(200, {
        'Expires': '0'
    });
    fs.createReadStream('./index.html').pipe(res);
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server started!')
});
