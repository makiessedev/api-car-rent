import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { CreateCar } from './create-car'

import 'express-async-errors'

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const carScheme = z.object({
      brand: z.string(),
      categoryId: z.string().uuid(),
      daily_rate: z.number(),
      description: z.string(),
      fine_amount: z.number(),
      license_plate: z.string(),
      name: z.string(),
    })

    const {
      brand,
      categoryId,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    } = carScheme.parse(request.body)

    const createCar = container.resolve(CreateCar)

    const car = await createCar.execute({
      brand,
      categoryId,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    })

    return response.status(201).send(car)
  }
}

export const createCarController = new CreateCarController().handle
