import config from 'config'
import express from 'express'
import routes from './routes'
import { getLogger } from './utils/logger'

const logger = getLogger('App startup')

logger.log('Starting application')

const app = express()

logger.log('Initializing routes')

Object.values(routes).forEach(value => {
  value.forEach(route => {
    app[route.method](route.path, route.controller)
  })
})

const port: number = config.get('app.port')

logger.log(`Listening on port ${port}`)

app.listen(port)
