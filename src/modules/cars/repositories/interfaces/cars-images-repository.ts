import { CarImage } from '../../model/car-image'

interface ICarsImagesRepository {
  update(car_id: string, images_name: string[]): Promise<void>
  findByCarId(id: string): Promise<CarImage | null>
}

export { ICarsImagesRepository }
