import { PrismaClient } from '@prisma/client'
import { prisma as prismaService } from '../../../../shared/prisma/prisma.service'
import { ICreateUserDTO } from '../../dtos/create-user-dto'
import { User } from '../../model/user'
import { IUsersRepository } from '../users-repository'
import { PrismaUserMapper } from '../mappers/prisma-user-mapper'

class PrismaUsersRepository implements IUsersRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaService
  }

  async create({
    name,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    const user = PrismaUserMapper.toPrisma(
      new User({
        name,
        email,
        password,
        driverLicense,
      })
    )

    await this.prisma.user.create({ data: user })
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) return null

    return PrismaUserMapper.toDomain(user)
  }
}

export { PrismaUsersRepository }
