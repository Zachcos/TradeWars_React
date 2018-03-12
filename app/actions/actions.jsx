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

export const playerTransaction = (adjustedPlayer) => {
  return {
    type: 'PLAYER_TRANSACTION',
    adjustedPlayer
  }
}

export const changeStateTest = () => {
  return {
    type: 'TOGGLE_LOADING'
  }
}