export const purchase = (update) => {
  return {
    type: 'PURCHASE',
    update
  }
}

export const sale = (update) => {
  return {
    type: 'SALE',
    update
  }
}