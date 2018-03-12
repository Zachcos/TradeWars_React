import initialState from './initialState';

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'PRODUCT_TRANSACTION':
      const updatedPurchase = state.map(prod => {
        if (prod.id === action.adjustedProduct.id) {
          return action.adjustedProduct
        }
        return prod
      })
      return updatedPurchase;
    default:
      return state;
  }
}

export const playerReducer = (state = initialState.currentPlayer, action) => {
  switch (action.type) {
    case 'PLAYER_TRANSACTION':
      return action.adjustedPlayer;
    default:
      return state;
  }
}

export const loadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return false;
    default:
      return state;
  }
}