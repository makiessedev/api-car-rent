import { randomUUID } from 'crypto'
import { Replace } from '../../../helpers/replace'

interface ICategoryProps {
  id: string
  name: string
  description: string
  createdAt: string
}

class Category {
  constructor(
    private props: Replace<ICategoryProps, { createdAt?: Date; id?: string }>
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

  get createdAt(): Date | undefined {
    return this.props.createdAt
  }

  get description(): string {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
  }
}

export { Category }
