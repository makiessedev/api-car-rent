import { container } from 'tsyringe'
import { AuthenticateUser } from './authenticate-user'
import { z } from 'zod'
import { Request, Response } from 'express'

const authenticateSchema = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: 'Email or password invalid!' }),
  password: z.string({ required_error: 'Password is required' }),
})

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = authenticateSchema.parse(request.body)

    const auhtenticateUser = container.resolve(AuthenticateUser)

    const token = await auhtenticateUser.execute({ email, password })

    return response.send(token)
  }
}

export const authenticateUserController = new AuthenticateUserController()
  .handle
