import mongoDb, { Db, MongoClient } from 'mongodb'
import config from 'config'

let mongoClient: MongoClient
let database: Db

const initConnection = async (): Promise<void> => {
  mongoClient = await mongoDb.connect(config.get('mongo.uri'), {
    auth: {
      user: config.get('mongo.username'),
      password: config.get('mongo.password')
    },
    useUnifiedTopology: true
  })

  database = mongoClient.db(config.get('mongo.database'))
}

const getDb = (): Db => database

const closeConnection = async (): Promise<void> => {
  return await mongoClient.close()
}

export default {
  closeConnection,
  initConnection,
  getDb
}
