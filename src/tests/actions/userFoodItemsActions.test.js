import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosRequests from '../../utilities/axiosRequests';
import * as types from '../../actions/types';
import { getFoodItems } from '../../actions/userFoodItemsActions';

const middleware = [thunk];
const mockStore = ConfigureMockStore(middleware);

describe('Unit tests for the auth actions', () => {
    describe('Unit tests for the action creators', () => {
        it('should get food Items ', async () => {
            const response = {
                data: []
            }
            const foodItemsCreator = foodItems => ({
                type: types.GET_FOODITEMS,
                foodItems
            });
            const stubGetMethod = sinon.stub(axiosRequests, 'Get').returns(response);
            const store = mockStore({});
            store.dispatch(getFoodItems()).then(() => {
                expect(store.getActions()[0]).toMatchObject(foodItemsCreator([]));
                stubGetMethod.restore();
            });
        })
    })
});
