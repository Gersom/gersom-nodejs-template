const host = process.env.HOST || 'http://localhost'
const port = process.env.PORT
let path = ''

if (port) path = `${host}:${port}`
else path = host

const message = 'Your server is ready'
const allMessage = `\n${message}:\n=> ${path}\n`

const listen = (app) => {
  app.listen(port, () => console.log(allMessage))
}

module.exports = listen