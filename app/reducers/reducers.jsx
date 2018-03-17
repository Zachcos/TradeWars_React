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
      const foundIndex = isItemMatching(state.stash, action.transactionData)
      if (action.transactionType == "Buy") {
        if (foundIndex !== -1) {
          const updatedItem = {...state.stash[foundIndex]}
          updatedItem.quantity += action.transactionData.quantity
          updatedItem.totalPrice += action.transactionData.totalPrice

          return {
            ...state,
            funds: state.funds - action.transactionData.totalPrice,
            stash: [
              ...state.stash.map(prod => {
                if (prod.id === updatedItem.id) {
                  return updatedItem
                } else {
                  return prod
                }
              })
            ]
          }
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
      } else if (action.transactionType === "Sell") {
        const updatedItem = {...state.stash[foundIndex]}
        updatedItem.quantity -= action.transactionData.quantity
        updatedItem.totalPrice -= action.transactionData.totalPrice

        if (updatedItem.quantity === 0) {
          return {
            ...state,
            funds: state.funds += action.transactionData.totalPrice,
            stash: [
              ...state.stash.filter(prod => prod.id !== updatedItem.id)
            ]
          }
        } else {
          return {
            ...state,
            funds: state.funds += action.transactionData.totalPrice,
            stash: [
              ...state.stash.map(prod => {
                if (prod.id === updatedItem.id) {
                  return updatedItem
                } else {
                  return prod
                }
              })
            ]
          }
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