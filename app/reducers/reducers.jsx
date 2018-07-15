import initialState from './initialState';
import { updateProducts } from '../actions/actions';

export const productsReducer = (state = initialState.products, action) => {
  function isItemMatching(products, transactionData) {
    return products.findIndex(product => product.id === transactionData.id)}
  
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return action.newProducts;
    case 'PRODUCT_TRANSACTION':
      const foundIndex = isItemMatching(state, action.transactionData);
      const updatedProduct = {...state[foundIndex]};

    if (action.transactionType === "Buy") {
      return state.map((prod, index) => {
        if(index !== foundIndex) {
          return prod;
        }
        return {
          ...updatedProduct,
          quantityAvailable: updatedProduct.quantityAvailable - action.transactionData.quantity
        }
      })
    } else if (action.transactionType === "Sell") {
      return state.map((prod, index) => {
        if(index !== foundIndex) {
          return prod;
        }
        return {
          ...updatedProduct,
          quantityAvailable: updatedProduct.quantityAvailable + action.transactionData.quantity
        }
      })
    }
    default:
      return state;
  }
}

export const playerReducer = (state = initialState.currentPlayer, action) => {
  function isItemMatching(stash, transactionData) {
    return stash.findIndex(product => product.id === transactionData.id)}

  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        funds: 10000,
        stash: []
      }
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
            funds: state.funds + action.transactionData.totalPrice,
            stash: [
              ...state.stash.filter(prod => prod.id !== updatedItem.id)
            ]
          }
        } else {
          return {
            ...state,
            funds: state.funds + action.transactionData.totalPrice,
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
    case 'LOAN_TRANSACTION':
      if (action.transactionType === "Pay back") {
        return {
          ...state,
          funds: state.funds - action.transactionData.amount,
          debt: state.debt - action.transactionData.amount
        }
      }
    default:
      return state;
  }
}

export const gameDataReducer = (state = initialState.gameData, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        daysRemaining: 30,
        currentCity: "Silicon Valley"
      }
    case 'SET_CITY':
      return {
        ...state,
        currentCity: action.city,
        daysRemaining: state.daysRemaining - 1
      }
    default:
      return state;
  }
}