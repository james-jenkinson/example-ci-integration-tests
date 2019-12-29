import { RequestHandler } from 'express';
import authRoutes from './auth.routes';
import healthRoutes from './health.routes';

export interface RouteConfiguration {
 path: string,
 controller: RequestHandler,
 method: 'get' | 'post',
}

interface RouteCollection {
  [key: string]: RouteConfiguration[]
}

const routes: RouteCollection = {
  authRoutes,
  healthRoutes,
};

export default routes;
