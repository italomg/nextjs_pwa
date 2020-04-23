const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const fs = require('fs')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // handle GET request to /service-worker.js
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname)

        fs.readFile(filePath, function (err,data) {
          if (err) {
            res.writeHead(404,  {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200,  {'Content-Type': 'text/javascript'});
          res.end(data);
        });
      } else if (pathname === '/index.html') {
        app.render(req, res, '/', query)
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(process.env.PORT, () => {
      console.log(`> Ready on http://localhost:${process.env.PORT}`)
    })
  })