import { validate as uuidValidate } from 'uuid'
import InvalidUuidError from '../../errors/invalid-uuid.error'
import UniqueEntityId from './unique-entity-id.vo'

describe('Unit tests unique entity id', () => {
  
  it('should throw erro when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })

  it('should accept a uuid passed in contructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const uuid = 'b843db79-3e7c-472a-9105-b9575ec41cc2'

    const uuidVO = new UniqueEntityId(uuid)
    expect(uuidVO.value).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })

  it('should gen a uuid when not passed in contructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

    const uuidVO = new UniqueEntityId()
    expect(uuidVO.value).not.toBeNull()
    expect(uuidValidate(uuidVO.value)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })
})
