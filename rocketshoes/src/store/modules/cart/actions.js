export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
};

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
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
