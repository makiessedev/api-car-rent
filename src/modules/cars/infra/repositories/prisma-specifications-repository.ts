import { PrismaClient } from '@prisma/client'
import { prisma as prismaService } from '../../../../shared/lib/prisma.service'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../../repositories/interfaces/specification-repository'
import { Specification } from '../../model/Specification'
import { PrismaSpecificationMapper } from './mappers/prisma-specification-mapper'

class PrismaSpecificationsRepository implements ISpecificationsRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaService
  }
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification({ name, description })

    const rawSpecification = PrismaSpecificationMapper.toPrisma(specification)

    await this.prisma.specification.create({ data: rawSpecification })
  }
}

export { PrismaSpecificationsRepository }
