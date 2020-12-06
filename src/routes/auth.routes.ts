import authController from '../controllers/auth.controllers'
import { RouteConfiguration } from '.'

const routes: RouteConfiguration[] = [
  {
    path: '/auth/login',
    controller: authController.login,
    method: 'post'
  }
]

export default routes
