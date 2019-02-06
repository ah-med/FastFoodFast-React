import reducer from '../../reducers'
import * as types from '../../actions/types';


const expectedState = {
    "auth": {
        "isAuthenticated": true, "role": "user"}, 
        "cart": {"cart": []}, 
        "foodItems": {"foodItems": []}, 
        "loading": {"isLoading": false}
    }

    const expectedInitialState = {
        "auth": {
            "isAuthenticated": false, "role": ""}, 
            "cart": {"cart": []}, 
            "foodItems": {"foodItems": []}, 
            "loading": {"isLoading": false}
        }
describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(expectedInitialState)
  })

  it('should handle AUTHENTICATED', () => {
    expect(
      reducer({}, {
        type: types.AUTHENTICATED,
        role: 'user'
      })
    ).toMatchObject(expectedState)
  })
})
