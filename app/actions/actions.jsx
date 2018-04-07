export const updateProducts = (newProducts) => {
  return {
    type: 'UPDATE_PRODUCTS',
    newProducts
  }
}

export const productTransaction = (transactionData, transactionType) => {
  return {
    type: 'PRODUCT_TRANSACTION',
    transactionData,
    transactionType
  }
}

export const playerTransaction = (transactionData, transactionType) => {
  return {
    type: 'PLAYER_TRANSACTION',
    transactionData,
    transactionType
  }
}