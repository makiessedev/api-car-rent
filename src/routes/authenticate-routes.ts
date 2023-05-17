import { Router } from 'express'
import { authenticateUserController } from '../modules/accounts/use-cases/authenticate-user/authenticate-user-controller'

const routes = Router()

routes.post('/sessions', authenticateUserController)

export { routes as authenticateRoutes }
