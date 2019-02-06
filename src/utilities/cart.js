const getTotalAmount = (cart) => {
    return cart.map(item => item.quantity * item.price).reduce((total, current) => total + current)
}

export default getTotalAmount;
