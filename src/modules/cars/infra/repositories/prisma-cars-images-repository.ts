import { prisma } from '../../../../shared/lib/prisma.service'
import { CarImage } from '../../model/car-image'
import { ICarsImagesRepository } from '../../repositories/interfaces/cars-images-repository'

class PrismaCarsImagesRepository implements ICarsImagesRepository {
  async create(car_id: string, images_name: string[]): Promise<void> {}
}

export { PrismaCarsImagesRepository }
