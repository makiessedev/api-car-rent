import { CarImage as RawCarImage } from '@prisma/client'
import { CarImage } from '../../../model/car-image'

class PrismaCarImageMapper {
  static toDomain({ car_id, created_at, id, images_name }: RawCarImage) {
    const fromStringImagesNameToArray = images_name.split(',')
    return new CarImage({
      car_id,
      images_name: fromStringImagesNameToArray,
      created_at,
      id,
    })
  }

  static toPrisma({
    car_id,
    createdAt,
    id,
    images_name,
  }: CarImage): RawCarImage {
    const fromArrayImagesNameToString = images_name.join(',')
    return {
      car_id,
      created_at: createdAt,
      id,
      images_name: fromArrayImagesNameToString,
    }
  }
}

export { PrismaCarImageMapper }
