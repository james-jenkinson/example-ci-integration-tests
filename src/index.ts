import config from 'config'
import express from 'express'
import mongo from './clients/mongo'
import routes from './routes'
import { getLogger } from './utils/logger'

const logger = getLogger('App startup')

logger.log('Starting application')

const app = express()
app.use(express.json())

logger.log('Initializing routes')

Object.values(routes).forEach(value => {
  value.forEach(route => {
    app[route.method](route.path, route.controller)
  })
})

const port: number = config.get('app.port')

logger.log('Initialising database connection')

mongo.initConnection().then(() => {
  logger.log('Connection ready')
  app.listen(port)
  logger.log(`Listening on port ${port}`)
}).catch(() => {
  logger.error('Application failed to start')
})
