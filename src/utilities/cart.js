export const getQuantity = (cart, id) => {
    const matchingItem = cart.find((foodItem) => {
        return foodItem.foodId === id;
    });
    return (matchingItem) ? matchingItem.quantity : matchingItem;
};

export const addToCart = (cart, item) => {
    const itemIndex = cart.findIndex((element) => element.foodId === item.foodId);
    if (itemIndex === -1 ) {
        item['quantity'] = 1;
        cart.push(item)
    } else {
        item['quantity'] = cart[itemIndex].quantity + 1
        cart[itemIndex] = item;
    }
    return cart;
}

export const removeFromCart = (cart, item) => {
const itemIndex = cart.findIndex((element) => element.foodId === item.foodId);
    if (itemIndex === -1 ) {
        return null;
    } 
    if (cart[itemIndex].quantity === 1) {
        cart.splice(itemIndex, 1);
    } else {
        item['quantity'] = cart[itemIndex].quantity - 1
        cart[itemIndex] = item;
    }
    return cart;
}

export const getTotalAmount = (cart) => {
    // use reduce method to calculate the total amount of the foodItem added to the cart
}
