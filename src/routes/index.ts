import { Router } from 'express'
import { categoryRoutes } from './category-routes'
import { specificationRoutes } from './specification-routes'
import { userRoutes } from './user-routes'
import { authenticateRoutes } from './authenticate-routes'

const app = Router()

app.use('/category', categoryRoutes)
app.use('/specification', specificationRoutes)
app.use('/user', userRoutes)
app.use(authenticateRoutes)

export { app as routes }
