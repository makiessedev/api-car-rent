import { inject, injectable } from 'tsyringe'
import { ICarsImagesRepository } from '../../repositories/interfaces/cars-images-repository'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'
import { AppError } from '../../../../shared/error/app-error'

interface IRequest {
  car_id: string
  images_name: string[]
}

@injectable()
class UploadCarsImage {
  constructor(
    @inject('CarsImageRepository')
    private carsImagesRepository: ICarsImagesRepository,

    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id)

    if (!carExists) throw new AppError('Car does not exists')

    await this.carsImagesRepository.update(car_id, images_name)
  }
}

export { UploadCarsImage }
