import { RequestHandler } from 'express'
import * as yup from 'yup'
import userService from '../services/user.service'

const createUser: RequestHandler = async (req, res) => {
  const user = req.body

  const requestSchema = yup.object({
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required()
  })

  if (!requestSchema.isValidSync(user)) {
    return res.status(400).send('Invalid request payload')
  }

  await userService.createUser(user)
  return res.send(user)
}

export default {
  createUser
}
