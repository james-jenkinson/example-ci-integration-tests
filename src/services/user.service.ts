import mongo from '../clients/mongo'
import { getLogger } from '../utils/logger'

const logger = getLogger('User service')
const collectionName = 'users'

interface User {
  name: string
  username: string
  password: string
}

const createUser = async (user: User): Promise<void> => {
  logger.log(`Creating user ${user.username}`)
  await mongo.getDb().collection(collectionName).insertOne(user)
}

const validatePassword = async (username: string, password: string): Promise<boolean> => {
  const collection = mongo.getDb().collection(collectionName)
  const user = await collection.findOne({ username })

  return user?.password === password
}

export default {
  createUser,
  validatePassword
}
