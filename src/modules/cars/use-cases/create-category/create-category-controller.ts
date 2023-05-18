import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCategory } from './create-category'
import { z } from 'zod'

import 'express-async-errors'

const categoryScheme = z.object({
  name: z.string({
    required_error: 'Name is required!',
    invalid_type_error: 'Name must be a string!',
  }),
  description: z.string({
    required_error: 'Description is required!',
    invalid_type_error: 'Description must be a string!',
  }),
})

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = categoryScheme.parse(request.body)

    const createCategory = container.resolve(CreateCategory)

    await createCategory.execute({ name, description })

    return response.status(201).send()
  }
}

export const createCategoryController = new CreateCategoryController().handle
