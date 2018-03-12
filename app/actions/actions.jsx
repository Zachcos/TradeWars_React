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
    type: 'CHANGE_STATE_TEST'
  }
}