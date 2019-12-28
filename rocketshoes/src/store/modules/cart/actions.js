export const addToCart = product => {
  return {
    type: '@cart/ADD_TO_CART',
    product,
  };
};


export function updateItem(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export function removeFromCart(id, amount) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
    amount,
  };
}
