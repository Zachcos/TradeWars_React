export const updateProducts = (newProducts) => {
  return {
    type: 'UPDATE_PRODUCTS',
    newProducts
  }
}

export const productTransaction = (adjustedProduct) => {
  return {
    type: 'PRODUCT_TRANSACTION',
    adjustedProduct
  }
}

export const playerTransaction = (transactionData) => {
  return {
    type: 'PLAYER_TRANSACTION',
    transactionData
  }
}

export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING'
  }
}