import { RequestHandler } from 'express'
import userService from '../services/user.service'
import authService from '../services/auth.service'

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body

  if (!(await userService.validatePassword(username, password))) {
    return res.status(403).send('Invalid username or password')
  }

  const authToken = authService.login(username)
  return res.send({
    token: authToken
  })
}

export default {
  login
}
