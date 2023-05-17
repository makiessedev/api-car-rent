import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ImportCategory } from './import-category'

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    const importCategory = container.resolve(ImportCategory)

    await importCategory.execute(file)

    return response.status(201).send()
  }
}

export const importCategoryController = new ImportCategoryController().handle
