import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { CreateSpecification } from './create-specification'

import 'express-async-errors'

const specificationScheme = z.object({
  name: z.string({
    required_error: 'Name is required!',
    invalid_type_error: 'Name must be a string!',
  }),
  description: z.string({
    required_error: 'Description is required!',
    invalid_type_error: 'Description must be a string!',
  }),
})

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = specificationScheme.parse(request.body)

    const createSpecification = container.resolve(CreateSpecification)

    const specification = await createSpecification.execute({ name, description })

    return response.status(201).send(specification)
  }
}

export const createSpecificationController = new CreateSpecificationController()
  .handle
