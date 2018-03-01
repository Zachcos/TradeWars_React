import initialState from './initialState';

export const productsReducer = (state = initialState.products, action) {
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return state;
    default:
      return state;
  }
}