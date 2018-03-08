import initialState from './initialState';

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'PRODUCT_PURCHASE':
      const updatedPurchase = state.map(prod => {
        if (prod.id === action.adjustedProduct.id) {
          return action.adjustedProduct
        }
        return prod
      })
      return updatedPurchase;
    case 'SALE':
      const updatedSales = state.map(prod => {
        if (prod.id === action.update.id) {
          return adjustedProduct;
        }
        return prod
      })
      return updatedSales
    default:
      return state;
  }
}

export const playerReducer = (state = initialState.currentPlayer, action) => {
  switch (action.type) {
    case 'PLAYER_PURCHASE':
      return action.adjustedPlayer;
      case 'SALE':
      return action.adjustedPlayer;
    default:
      return state;
  }
}