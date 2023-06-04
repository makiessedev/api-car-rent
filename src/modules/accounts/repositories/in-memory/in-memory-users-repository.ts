import { array } from 'zod'
import { AppError } from '../../../../shared/error/app-error'
import { ICreateUserDTO } from '../../dtos/create-user-dto'
import { User } from '../../model/user'
import { IUsersRepository } from '../users-repository'

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[]

  constructor() {
    this.users = []
  }

  async create(data: ICreateUserDTO): Promise<void> {
    this.users.push(new User(data))
  }

  async update(data: ICreateUserDTO): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === data.id)

    if (!userIndex) throw new AppError('User not found!')


  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email)
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id)
  }
}

export { InMemoryUsersRepository }
