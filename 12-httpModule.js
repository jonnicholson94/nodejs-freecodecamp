
const http = require("http")

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("Homepage")
    }

    if (req.url === "/about") {
        res.end("About")
    }

    res.end(`<h1>Can send HTML too</h1>`)
})

server.listen(3000)