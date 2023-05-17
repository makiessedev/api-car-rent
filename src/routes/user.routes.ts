import { Router } from 'express'
import { createUserController } from '../modules/accounts/use-cases/create-user/create-user-controller'

const routes = Router()

routes.post('/', createUserController)

export { routes as userRoutes }
