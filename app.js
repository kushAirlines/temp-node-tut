const http = require('http')
 
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page.')
    }
    if(req.url === '/about') {
        res.end('Short history about me')
    }
    res.end(`
    <h1>Couldnt' make it</h1>
    <p>We can't see to find the page </p>
    <a href="/">back home </a>
    `)
})

server.listen(3003)