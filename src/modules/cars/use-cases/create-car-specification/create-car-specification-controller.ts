import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { CreateCarSpecification } from './create-car-specification'

class CreateCarSpecificationController {
  async handle(request: Request, response: Response) {
    const specificationsIdScheme = z.object({
      specifications_id: z.string().uuid().array(),
    })

    const { id } = request.params
    const { specifications_id } = specificationsIdScheme.parse(request.body)

    const createCarSpecification = container.resolve(CreateCarSpecification)

    const car = await createCarSpecification.execute({
      car_id: id,
      specifications_id,
    })

    return response.send(car)
  }
}

export const createCarSpecificationsController =
  new CreateCarSpecificationController().handle
