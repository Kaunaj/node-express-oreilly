const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

function serveStatic(res, status, contentType, file) {
    fs.readFile(__dirname + "/public/" + file, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Something went wrong");
        }
        res.writeHead(status, { "Content-Type": contentType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log("req url:", url);
    const pathname = url.pathname.replace(/\/$/g, "").toLowerCase();
    console.log("pathname with trailing slash removed:", pathname);
    switch (pathname) {
        case "":
            serveStatic(res, 200, "text/html", "home.html");
            break;
        case "/about":
            serveStatic(res, 200, "text/html", "about.html");
            break;
        case "/img/logo.png":
            serveStatic(res, 200, "image/png", "img/logo.png");
            break;
        default:
            serveStatic(res, 404, "text/html", "404.html");
            break;
    }
});

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})
