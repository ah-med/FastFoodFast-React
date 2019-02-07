import getErrorMessage from '../../utilities/getErrorMessage';

describe('Unit tests for get Error message', () => {
    test('should return password error field', () => {
        const errorField = {
            password: 'incorrect password'
        }
        const error = getErrorMessage(errorField);
        expect(error).toEqual('incorrect password')
    });
    test('should return first and last name error', () => {
        const errorField = {
        }
        const error = getErrorMessage(errorField);
        expect(error).toEqual('firstname and lastname must contain only alphabet')
    });
})
