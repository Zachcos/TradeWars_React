export const productPurchase = (adjustedProduct) => {
  return {
    type: 'PRODUCT_PURCHASE',
    adjustedProduct
  }
}

export const playerPurchase = (adjustedPlayer) => {
  return {
    type: 'PLAYER_PURCHASE',
    adjustedPlayer
  }
}

export const productSale = (adjustedProduct) => {
  return {
    type: 'PRODUCT_SALE',
    adjustedProduct
  }
}

export const playerSale = (adjustedPlayer) => {
  return {
    type: 'PLAYER_SALE',
    adjustedPlayer
  }
}