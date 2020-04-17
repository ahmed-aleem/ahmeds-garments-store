export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const isExistingItem = cartItems.find((cartItem) => (cartItem.id === cartItemToAdd.id));

    if(isExistingItem){
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}