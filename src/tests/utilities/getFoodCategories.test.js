import getCategories from '../../utilities/getFoodCategories';

describe('Unit tests for getFoodCategories middleware', () => {
    test('should get categories of food items', () => {
        const foodItemArray = [
            {
                category: 'name'
            },
            {
                category: 'boy'
            }
        ]
        const foodItem = getCategories(foodItemArray, 'name');
        expect(foodItem).toMatchObject([foodItemArray[0]])
    });
})
