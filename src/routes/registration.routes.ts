import registrationController from '../controllers/registration.controller'
import { RouteConfiguration } from '.'

const routes: RouteConfiguration[] = [
  {
    path: '/register',
    controller: registrationController.createUser,
    method: 'post'
  }
]

export default routes
