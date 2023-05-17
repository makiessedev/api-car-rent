import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCategory } from './list-category'

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategory = container.resolve(ListCategory)

    const categories = await listCategory.execute()

    return response.status(200).send(categories)
  }
}

export const listCategoryController = new ListCategoryController().handle
