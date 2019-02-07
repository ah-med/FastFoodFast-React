import reducer from '../../reducers'
import * as types from '../../actions/types';


const expectedState = {"auth": {"isAuthenticated": true, "role": "user"}, "cart": [], "cartStatus": {"isCheckOut": false, "totalAmount": null}, "foodItems": {"foodItems": []}, "loading": {"isLoading": false}}
const expectedInitialState = {"auth": {"isAuthenticated": false, "role": ""}, "cart": [], "cartStatus": {"isCheckOut": false, "totalAmount": null}, "foodItems": {"foodItems": []}, "loading": {"isLoading": false}}
const addCartexpectedState =  {"auth": {"isAuthenticated": false, "role": ""}, "cart": [{}], "cartStatus": {"isCheckOut": false, "totalAmount": null}, "foodItems": {"foodItems": []}, "loading": {"isLoading": false}}
const placeOrderExpectedState = {"auth": {"isAuthenticated": false, "role": ""}, "cart": [], "cartStatus": {"isCheckOut": false, "totalAmount": null}, "foodItems": {"foodItems": []}, "loading": {"isLoading": false}}
const removeCartExpectedState ={"auth": {"isAuthenticated": false, "role": ""}, "cart": [], "cartStatus": {"isCheckOut": false, "totalAmount": null}, "foodItems": {"foodItems": []}, "loading": {"isLoading": false}}
describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(expectedInitialState)
  })

  it('should handle ADD_CART', () => {
    expect(
      reducer({}, {
        type: types.ADD_CART,
        item: {}
      })
    ).toMatchObject(addCartexpectedState)
  })
  it('should handle REMOVE_CART', () => {
    expect(
      reducer({}, {
        type: types.REMOVE_CART,
        item: {}
      })
    ).toMatchObject(removeCartExpectedState)
  })
  it('should handle PLACE_ORDER_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.PLACE_ORDER_SUCCESS,
      })
    ).toMatchObject(placeOrderExpectedState)
  })
})
