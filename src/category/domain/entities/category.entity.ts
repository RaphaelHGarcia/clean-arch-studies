import { v4 as uuidv4 } from 'uuid'

export type CategoryEntityProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}


export class CategoryEntity {

  constructor(
    public readonly props: CategoryEntityProps,
    public id?: string
  ) {
    this.id = id || uuidv4()
    this.description = this.props.description
    this.props.is_active = this.is_active ?? true
    this.props.created_at = this.created_at ?? new Date()
  }

  get name () { return this.props.name }

  get description () { return this.props.description }

  private set description (value: string) {
    this.props.description = value ?? null
  }

  get is_active () { return this.props.is_active }

  private set is_active (value: boolean) {
    this.props.is_active = value ?? true
  }

  get created_at () { return this.props.created_at }

}