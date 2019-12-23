export const addToCart = product => {
  return {
    type: '@cart/ADD_TO_CART',
    product,
  };
};
