import { Entity } from './entity'
import UniqueEntityId from '../value-objects/unique-entity-id.vo'
import { validate as validateUUID } from 'uuid'


class StubEntity extends Entity<{ prop1: string, prop2: number }> {}

describe('Entity unit tests', () => {

  it('should set props and id', () => {
    const entity = new StubEntity({ prop1: 'value 1', prop2: 2 })
    expect(entity.props).toStrictEqual({ prop1: 'value 1', prop2: 2 })
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).not.toBeNull()
    expect(validateUUID(entity.id)).toBeTruthy()
  })
  
  it('should accept valid a uuid', () => {
    let uniqueEntityId = new UniqueEntityId('b843db79-3e7c-472a-9105-b9575ec41cc2')
    let entity = new StubEntity({ prop1: 'value 1', prop2: 2 }, uniqueEntityId)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(validateUUID(entity.id)).toBeTruthy()
    expect(entity.id).toBe('b843db79-3e7c-472a-9105-b9575ec41cc2')

    uniqueEntityId = new UniqueEntityId()
    entity = new StubEntity({ prop1: 'value 1', prop2: 2 }, uniqueEntityId)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(validateUUID(entity.id)).toBeTruthy()
    expect(entity.id).toBe(uniqueEntityId.value)
  })

  it('should convert a entity in JSON', () => {
    const arrange = { prop1: 'my prop', prop2: 3 }
    const uniqueEntityId = new UniqueEntityId()
    const entity = new StubEntity(arrange, uniqueEntityId)

    expect(entity.toJSON()).toStrictEqual({
      id: uniqueEntityId.value,
      ...arrange
    })
  })

})