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

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification({ name, description })

    const rawSpecification = await this.prisma.specification.create({
      data: PrismaSpecificationMapper.toPrisma(specification),
    })

    return PrismaSpecificationMapper.toDomain(rawSpecification)
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.prisma.specification.findMany({
      where: { id: { in: ids } },
    })

    return specifications.map(PrismaSpecificationMapper.toDomain)
  }
}

export { PrismaSpecificationsRepository }
