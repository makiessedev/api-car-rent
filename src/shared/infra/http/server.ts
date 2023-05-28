import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { ZodError } from 'zod'

import { routes } from './routes'
import { AppError } from '../../error/app-error'
import '../../container'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    if (err instanceof ZodError) {
      return response.status(400).send({ message: err.issues[0].message })
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error - ${err.message}`,
    })
  }
)

app.listen(3333, () => {
  console.log('Server running!')
})
