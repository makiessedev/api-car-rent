import { Router } from 'express'
import { categoryRoutes } from './category-routes'
import { SpecificationRoutes } from './specification-routes'
import { userRoutes } from './user.routes'

const app = Router()

app.use('/category', categoryRoutes)
app.use('/specification', SpecificationRoutes)
app.use('/user', userRoutes)

export { app as routes }
