import { shallow } from 'enzyme';
import routes from '../routes';

describe('routes', () => {
    test('should render Router componenet ', () => {
        let wrapper = shallow(routes);
        expect(wrapper.find('div').length).toBe(1);
    });
})
