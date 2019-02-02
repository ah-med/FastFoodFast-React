
const getCategories = (foodItemArray, categoryName) => {
  return foodItemArray.filter(foodItem => foodItem.category === categoryName);
};

export default getCategories;
