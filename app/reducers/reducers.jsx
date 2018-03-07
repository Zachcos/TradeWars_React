import initialState from './initialState';

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'PURCHASE':
      const updatedPurchase = state.map(prod => {
        if (prod.id === action.update.id) {
          return {
            ...prod,
            quantityAvailable: prod.quantityAvailable - action.update.quantity
          }
        }
        return prod
      })
      return updatedPurchase;
    case 'SALE':
      const updatedSales = state.map(prod => {
        if (prod.id === action.update.id) {
          return {
            ...prod,
            quantityAvailable: prod.quantityAvailable + action.update.quantity
          }
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
    case 'PURCHASE':

    const newStashItem = {
      id: action.update.id,
      totalPrice: action.update.totalPrice,
      quantity: action.update.quantity
    }

      return {
        ...state,
        funds: state.funds - action.update.totalPrice,
        stash: [
          ...state.stash,
          newStashItem
        ]
      };
      case 'SALE':
      return {
        ...state,
        funds: state.funds + action.update.totalPrice
      };
    default:
      return state;
  }
}