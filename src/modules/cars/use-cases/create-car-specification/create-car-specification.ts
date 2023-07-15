import { inject, injectable } from 'tsyringe'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'
import { AppError } from '../../../../shared/error/app-error'
import { ISpecificationsRepository } from '../../repositories/interfaces/specification-repository'
import { Car } from '../../model/Car'

interface IRequest {
  car_id: string
  specifications_id: string[]
}

@injectable()
class CreateCarSpecification {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id)

    if (!car) throw new AppError('Car does not exists!')

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    )

    car.specifications = specifications

    const carUpdated = await this.carsRepository.update(car)

    return carUpdated
  }
}

export { CreateCarSpecification }
