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
    id,
    name,
    email,
    avatar,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    const user = PrismaUserMapper.toPrisma(
      new User({
        id,
        name,
        email,
        avatar,
        password,
        driverLicense,
      })
    )

    await this.prisma.user.create({ data: user })
  }

  async update({
    id,
    name,
    email,
    avatar,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        avatar,
        password,
        driverLicense,
      },
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) return null

    return PrismaUserMapper.toDomain(user)
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } })

    if (!user) return null

    return PrismaUserMapper.toDomain(user)
  }
}

export { PrismaUsersRepository }
