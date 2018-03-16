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
  function isItemMatching(stash, transactionData) {
    return stash.findIndex(product => product.id === transactionData.id)}

  switch (action.type) {
    case 'PLAYER_TRANSACTION':
      const foundOne = isItemMatching(state.stash, action.transactionData)

      if (action.transactionType == "Buy") {
        if (foundOne !== -1) {
          console.log("we already have that in the stash")
        } else {
          return {
            ...state,
            funds: state.funds - action.transactionData.totalPrice,
            stash: [
              ...state.stash,
              action.transactionData
            ]
          };
        }
      }
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

// state.stash.map(prod => {
//   if (prod.name === action.transactionData.name) {
//     const update = {
//       ...prod,
//       quantity: prod.quantity + action.transactionData.quantity,
//       totalPrice: prod.totalPrice + action.transactionData.totalPrice
//     }
//     console.log(update)
//   }
// })