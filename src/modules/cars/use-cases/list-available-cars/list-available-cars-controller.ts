import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { ListAvailableCars } from './list-available-cars'

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAvailableCarsScheme = z.object({
      category_id: z.string().uuid().optional(),
      name: z.string().optional(),
      brand: z.string().optional(),
    })

    const { category_id, name, brand } = listAvailableCarsScheme.parse(
      request.query
    )

    const listAvailableCars = container.resolve(ListAvailableCars)

    const cars = await listAvailableCars.execute({ category_id, brand, name })

    return response.send(cars)
  }
}

export const listAvailableCarsController = new ListAvailableCarsController()
  .handle
