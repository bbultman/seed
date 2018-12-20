const server = require('./src')
const config = require('./config')

async function main () {
  server.listen(config.port, () => {
    console.log(`Listening to http://localhost:${config.port}`)
  })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
