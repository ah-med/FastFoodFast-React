import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import toastr from 'toastr';
import * as axiosRequests from '../../utilities/axiosRequests';
import * as types from '../../actions/types';
import addMeal from '../../actions/adminActions';

const middleware = [thunk];
const mockStore = ConfigureMockStore(middleware);

describe('Unit tests for the auth actions', () => {
    describe('Unit tests for the action creators', () => {
        it('should addMeal ',  async () => {
            const response = {
                data: true
            }
            const mealData = {
                foodName: '',
                price: 5,
                category: '',
                imageUrl: ''
            }
            const startLoading = {
                type: types.LOADING_START
            };
            const stopLoading = {
                type: types.LOADING_STOP
            };
          const stubPostMethod = sinon.stub(axiosRequests, 'Post').returns(response);
          const stubToastr = sinon.stub(toastr, 'success').returns(response);
          const store = mockStore({});
          store.dispatch(addMeal(mealData)).then(() => {
            expect(store.getActions()).toEqual(
                expect.arrayContaining([startLoading])
                );
            stubPostMethod.restore();
            expect(store.getActions()).toEqual(
                expect.arrayContaining([stopLoading])
                );
            stubPostMethod.restore();
            stubToastr.restore();
          });
        })
    })
})
