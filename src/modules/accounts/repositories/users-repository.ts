import { ICreateUserDTO } from '../dtos/create-user-dto'
import { User } from '../model/user'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User | null>
}

export { IUsersRepository }
