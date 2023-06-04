import { randomUUID } from 'crypto'
import { Specification } from './Specification'

interface ICarProps {
  id?: string
  name: string
  description: string
  daily_rate: number
  available?: boolean
  license_plate: string
  fine_amount: number
  brand: string
  created_at?: Date
  categoryId: string
  specifications?: Specification[]
}

class Car {
  constructor(private props: ICarProps) {
    if (!this.props.id) {
      this.props.id = randomUUID()
      this.props.created_at = new Date()
      this.props.available = true
    }
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get description(): string {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
  }

  get daily_rate(): number {
    return this.props.daily_rate
  }

  set daily_rate(value: number) {
    this.props.daily_rate = value
  }

  get available(): boolean {
    return this.props.available
  }

  set available(value: boolean) {
    this.props.available = value
  }

  get license_plate(): string {
    return this.props.license_plate
  }

  set license_plate(value: string) {
    this.props.license_plate = value
  }

  get fine_amount(): number {
    return this.props.fine_amount
  }

  set fine_amount(value: number) {
    this.props.fine_amount = value
  }

  get brand(): string {
    return this.props.brand
  }

  set brand(value: string) {
    this.props.brand = value
  }

  get specifications(): Specification[] {
    return this.props.specifications
  }

  set specifications(specifications: Specification[]) {
    this.props.specifications = specifications
  }

  get created_at(): Date {
    return this.props.created_at
  }

  get categoryId(): string {
    return this.props.categoryId
  }

  set categoryId(value: string) {
    this.props.categoryId = value
  }
}

export { Car }
