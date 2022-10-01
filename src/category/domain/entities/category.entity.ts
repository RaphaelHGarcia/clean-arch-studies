
export type CategoryEntityProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}


export class CategoryEntity {

  constructor(public readonly props: CategoryEntityProps) {
    this.props.is_active = true
  }

  get name () { return this.props.name }

  get description () { return this.props.description }

  get is_active () { return this.props.is_active }

  get created_at () { return this.props.created_at }

}