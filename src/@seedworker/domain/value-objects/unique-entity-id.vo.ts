import { 
  v4 as uuidv4,
  validate as uuidValidate
} from 'uuid'
import ObjectValue from '../value-objects/value-object'
import InvalidUuidError from '../../errors/invalid-uuid.error'

export default class UniqueEntityId extends ObjectValue<string> {
  public readonly id: string

  constructor (id?: string) {
    super(id || uuidv4())
    this.validate()
  }

  private validate () {
    const isValid = uuidValidate(this.value)
    if (!isValid) throw new InvalidUuidError()
  }

}