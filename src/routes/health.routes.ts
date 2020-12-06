import { RouteConfiguration } from '.'

const routes: RouteConfiguration[] = [
  {
    path: '/health',
    method: 'get',
    controller: (_, res) => { res.send('ok') }
  }
]

export default routes
