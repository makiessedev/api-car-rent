import { prisma } from '../../../../shared/lib/prisma.service'
import { CarImage } from '../../model/car-image'
import { ICarsImagesRepository } from '../../repositories/interfaces/cars-images-repository'
import { PrismaCarImageMapper } from './mappers/prisma-car-image-mapper'

class PrismaCarsImagesRepository implements ICarsImagesRepository {
  async findByCarId(car_id: string): Promise<CarImage | null> {
    const carImage = await prisma.carImage.findFirst({ where: { car_id } })

    if (!carImage) return null

    return PrismaCarImageMapper.toDomain(carImage)
  }

  async update(car_id: string, images_name: string[]): Promise<void> {
    const carImage = await this.findByCarId(car_id)

    if (!carImage) {
      const newCarImage = PrismaCarImageMapper.toPrisma(
        new CarImage({ car_id, images_name })
      )

      await prisma.carImage.create({
        data: {
          id: newCarImage.id,
          images_name: newCarImage.images_name,
          car_id: newCarImage.car_id,
          created_at: newCarImage.created_at,
        },
      })

      return
    }

    images_name.map((car_image) => carImage.images_name.push(car_image))

    await prisma.carImage.update({
      where: { id: carImage.id },
      data: PrismaCarImageMapper.toPrisma(carImage),
    })
  }
}

export { PrismaCarsImagesRepository }
