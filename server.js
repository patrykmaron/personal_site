const express = require('express')
const next = require('next')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV === 'production';
const app = next({ dev });
const handle = app.getRequestHandler()

console.log("dev:")
console.log(dev)

app.prepare().then(() => {
    const server = express()
    server.use(compression())

    server.get('/contact', (req, res) => {
        console.log("/contact accessed")
        return app.render(req, res, '/contact', req.query)
    })

    server.get('/b', (req, res) => {
        return app.render(req, res, '/b', req.query)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.post('/sendemail',(req, res) => {
        console.log(req)
        
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`) 
    })

})
