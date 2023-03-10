
// It's possible to also emit events using other modules, such as http.

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(3000)