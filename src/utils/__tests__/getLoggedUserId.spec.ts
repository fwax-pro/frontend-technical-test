import { getLoggedUserId } from '../index'

describe('getLoggedUserId', () => {
  it('should return logged user id', () => {
    const expected = 1

    expect(getLoggedUserId()).toEqual(expected)
  })
})