import * as https from 'https';

const options = {
    // key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    // cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
};

https.createServer(options, (req, res) => {
    res.end('hello world\n');
}).listen(8080);

// let services = Services();

// Application()
// .run(services);
