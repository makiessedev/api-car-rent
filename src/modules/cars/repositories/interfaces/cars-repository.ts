import { ISaveCarDTO } from '../../dtos/save-car-dto'
import { Car } from '../../model/Car'

interface ICarsRepository {
  create(datas: ISaveCarDTO): Promise<Car>
  update(datas: ISaveCarDTO): Promise<Car>
  findByLacensePlate(license_plate: string): Promise<Car | null>
  findById(id: string): Promise<Car | null>
  findByAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Car[] | null>
}

export { ICarsRepository }
