import { Router } from 'express'
import { authenticateUserController } from '../../../../modules/accounts/use-cases/authenticate-user/authenticate-user-controller'

const routes = Router()

routes.post('/', authenticateUserController)

export { routes as authenticateRoutes }
