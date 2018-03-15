import initialState from './initialState';

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return action.newProducts;
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
  const stashItemIndex = state.stash.findIndex(prod => prod.id === action.transactionData.id)
  
  switch (action.type) {
    case 'PLAYER_TRANSACTION':
    if (action.transactionType == "Buy") {
      if (stashItemIndex === -1) {
        return {
          ...state,
          funds: state.funds - action.transactionData.totalPrice,
          stash: [
            ...state.stash,
            action.transactionData
          ]
        };
      } else if (stashItemIndex !== -1) {
        
      }
    } else {
      return state;
    };
    default:
      return state;
  }
}

export const loadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return !state;
    default:
      return state;
  }
}