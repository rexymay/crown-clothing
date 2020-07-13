import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector 

// output selector 
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

// output selector 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)
);