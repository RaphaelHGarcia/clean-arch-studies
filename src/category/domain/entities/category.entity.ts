import { Entity } from '../../../@seedworker/domain/entity/entity'
import UniqueEntityId from '../../../@seedworker/domain/value-objects/unique-entity-id.vo'

export type CategoryEntityProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}

export class CategoryEntity extends Entity<CategoryEntityProps> {
  constructor(
    public readonly props: CategoryEntityProps,
    id?: UniqueEntityId
  ) {
    super(props, id)
    this.description = this.props.description
    this.props.is_active = this.is_active ?? true
    this.props.created_at = this.created_at ?? new Date()
  }

  get name () { return this.props.name }

  private set name (value: string) {
    if (!value || value.length === 0) {
      throw new Error('Field name is required')
    }

    this.props.name = value
  }

  get description () { return this.props.description }

  private set description (value: string) {
    this.props.description = value ?? null
  }

  get is_active () { return this.props.is_active }

  private set is_active (value: boolean) {
    this.props.is_active = value ?? true
  }

  get created_at () { return this.props.created_at }

  update (name: string, description: string) {
    this.name = name
    this.description = description
  }

  activate () {
    this.is_active = true
  }
  
  deactivate () {
    this.is_active = false
  }
}