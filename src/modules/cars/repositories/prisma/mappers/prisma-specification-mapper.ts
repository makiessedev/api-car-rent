import { Specification as rawSpecification } from '@prisma/client'
import { Specification } from '../../../model/Specification'

class PrismaSpecificationMapper {
  static toDomain({ id, name, description, createdAt }: rawSpecification) {
    return new Specification({ id, name, description, createdAt })
  }

  static toPrisma({ id, name, description, createdAt }: Specification) {
    return { id, name, description, createdAt }
  }
}

export { PrismaSpecificationMapper }
