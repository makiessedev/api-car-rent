import { container } from 'tsyringe'
import { CreateUser } from './create-user'
import { Request, Response } from 'express'
import { z } from 'zod'

const userScheme = z.object({
  name: z.string({
    required_error: 'Name is required!',
    invalid_type_error: 'Name must be a string!',
  }),
  email: z
    .string({ required_error: 'Email is required!' })
    .email({ message: 'invalid email!' }),
  password: z.string(),
  driverLicense: z.string(),
})

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driverLicense } = userScheme.parse(
      request.body
    )

    const createUser = container.resolve(CreateUser)

    await createUser.execute({ name, email, password, driverLicense })

    return response.status(201).send()
  }
}

export const createUserController = new CreateUserController().handle
