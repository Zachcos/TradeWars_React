export const productPurchase = (update) => {
  return {
    type: 'PRODUCT_PURCHASE',
    update
  }
}

export const playerPurchase = (update) => {
  return {
    type: 'PLAYER_PURCHASE',
    update
  }
}

export const sale = (update) => {
  return {
    type: 'SALE',
    update
  }
}