const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello world!');
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is an example</h1>");
    res.end("<p>Hello World!</p>");
});

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}; ` + 'press Ctrl-C to terminate....')
});
