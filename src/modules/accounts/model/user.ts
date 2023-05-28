import { randomUUID } from 'crypto'
import { Replace } from '../../../helpers/replace'

interface IUserProps {
  id: string
  name: string
  email: string
  avatar?: string
  password: string
  isAdmin?: boolean
  driverLicense: string
  createdAt: Date
}

class User {
  constructor(
    private props: Replace<IUserProps, { createdAt?: Date; id?: string }>
  ) {
    this.props = {
      ...this.props,
      id: this.props.id ?? randomUUID(),
      createdAt: this.props.createdAt ?? new Date(),
    }
  }

  get id(): string | undefined {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get email(): string {
    return this.props.email
  }

  set email(value: string) {
    this.props.email = value
  }

  get password(): string {
    return this.props.password
  }

  set password(value: string) {
    this.props.password = value
  }

  get avatar(): string {
    return this.props.avatar
  }

  set avatar(value: string) {
    this.props.avatar = value
  }

  get isAdmin(): boolean {
    return this.props.isAdmin
  }

  get driverLicense(): string {
    return this.props.driverLicense
  }

  set driverLicense(value: string) {
    this.props.driverLicense = value
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt
  }
}

export { User }
