import { User as rawUser } from '@prisma/client'
import { User } from '../../model/user'

class PrismaUserMapper {
  static toDomain({
    id,
    name,
    email,
    password,
    avatar,
    driverLicense,
    isAdmin,
    createdAt,
  }: rawUser) {
    return new User({
      id,
      name,
      email,
      password,
      avatar,
      driverLicense,
      isAdmin,
      createdAt,
    })
  }

  static toPrisma({
    id,
    name,
    email,
    password,
    avatar,
    isAdmin,
    driverLicense,
    createdAt,
  }: User) {
    return { id, name, email, password, avatar, isAdmin, driverLicense, createdAt }
  }
}

export { PrismaUserMapper }
