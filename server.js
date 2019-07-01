const express = require('express')
const next = require('next')
const compression = require('compression')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const sm = require('sitemap')

const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV.trim() !== "production";

const app = next({ dev });
const handle = app.getRequestHandler()

console.log("dev:")
console.log(dev)
console.log(process.env.NODE_ENV)

const sitemap = sm.createSitemap({
    hostname: 'https://www.patrykmaron.com',
    cacheTime: 600000,
    urls: [
        {url: '/contact', priority: 0.5},
        {url: '/app-development', priority: 0.5},
        {url: '/ecommerce', priority: 0.5},
        {url: '/frequently-asked', priority: 0.5},
        {url: '/seo', priority: 0.5},
        {url: '/web-design', priority: 0.5},
    ]
})

app.prepare().then(() => {
    const server = express()
    server.use(compression())
    server.use(bodyParser.json())

   

    server.get('/contact', (req, res) => {
        return app.render(req, res, '/contact', req.query)
    })

    server.get('/app-development', (req, res) => {
        return app.render(req, res, '/app-development', req.query)
    })

    server.get('/ecommerce', (req, res) => {
        return app.render(req, res, '/ecommerce', req.query)
    })

    server.get('/frequently-asked', (req, res) => {
        return app.render(req, res, '/frequently-asked', req.query)
    })

    server.get('/seo', (req, res) => {
        return app.render(req, res, '/seo', req.query)
    })

    server.get('/web-design', (req, res) => {
        return app.render(req, res, '/web-design', req.query)
    })

    server.get('/robots.txt', function (req, res) {
        res.type('text/plain');
        res.send("User-agent: *\nDisallow: ");
    });
    
    server.get('/sitemap.xml', (req, res) => {
        sitemap.toXML((err,xml)=>{
            if (err){
                return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send( xml );
        })
    })

  
    server.get('*', (req, res) => {
        return handle(req, res)
    })
   

    // APIs
    server.post('/api/contact', (req, res) => {
        const { clientName, emailAddress, phoneNumber, messageContent, enquiryType, existingWebsite } = req.body
        if( clientName && emailAddress && messageContent ){
            const smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                port: 465,
                secure: true,
                auth: {
                    type: 'OAuth2',
                    user: 'info@patrykmaron.com',
                    clientId: '640062487743-gudf6gr592d449j5o3trvqvl368ba30a.apps.googleusercontent.com',
                    clientSecret: 'QiElIaRJLTZyx88HuvTzzOn9',
                    refreshToken: '1/GHdzp1OZP-nbbt5zEfCkU2Cv6RUwuwBEvJC2_s831wc',
                }
            });

            const mailOptions = {
                from: emailAddress,
                to: 'info@patrykmaron.com',
                subject: 'Webpage Mail from: ' + clientName,
                html: ` <p>Name: ${clientName}<p>
                        <p>Email: ${emailAddress}</p>
                        <p>Phone: ${phoneNumber}</p>
                        <p>Type: ${enquiryType}</p>
                        <p>Website: ${existingWebsite}</p>
                        <p>Message: ${messageContent}</p>
                `,
            }

            smtpTransport.sendMail(mailOptions,
                (error, response)=>{
                    if(error){
                        res.send(error)
                        console.log("error")
                        console.log(error)
                    } else {
                        res.sendStatus(200)
                        console.log("sent")
                    }
                })

            smtpTransport.close();
        } else {
            res.send('error: Missing fields')
        }
      })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`) 
    })

})
