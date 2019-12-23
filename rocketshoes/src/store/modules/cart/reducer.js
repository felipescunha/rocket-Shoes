export default function cart(state = [], action) {
  // console.tron.log(state);
  // console.tron.log(action);

  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
