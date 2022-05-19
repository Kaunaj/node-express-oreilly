const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log("req url:", url);
    const pathname = url.pathname.replace(/\/$/g, "").toLowerCase();
    console.log("pathname with trailing slash removed:", pathname);
    res.writeHead(200, { "Content-Type": "text/plain" });
    switch (pathname) {
        case "":
            res.end("Home");
            break;
        case "/about":
            res.end("About");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
    }
});

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
