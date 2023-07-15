import { randomUUID } from 'crypto'
import { Replace } from '../../../helpers/replace'

interface CarImageProps {
  id?: string
  car_id: string
  images_name: string[]
  created_at: Date
}

class CarImage {
  constructor(private props: Replace<CarImageProps, { created_at?: Date }>) {
    this.props = {
      ...this.props,
      id: this.props.id ?? randomUUID(),
      created_at: this.props.created_at ?? new Date(),
    }
  }

  get id() {
    return this.props.id
  }

  get car_id() {
    return this.props.car_id
  }

  set car_id(id: string) {
    this.props.car_id = id
  }

  get images_name() {
    return this.props.images_name
  }

  set images_name(images_name: string[]) {
    this.props.images_name = images_name
  }

  get createdAt() {
    return this.props.created_at
  }
}

export { CarImage }
