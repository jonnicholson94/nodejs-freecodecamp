

const http = require("http")

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        console.log("Testing homepage");
        res.end("Homepage")
    } 

    if (req.url === "/about") {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log("Logging....");
            }
        }
        res.end("About")
    }

    console.log("Checking error..");
    res.end("Error page")
})

server.listen( 3000, () => {
    console.log("Server is listening on Port 3000.");
})

