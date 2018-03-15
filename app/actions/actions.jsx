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

export const playerTransaction = (transactionData, transactionType) => {
  return {
    type: 'PLAYER_TRANSACTION',
    transactionData,
    transactionType
  }
}

export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING'
  }
}