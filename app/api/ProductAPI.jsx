module.exports = {
  // Randomize price data before loading app
  randomizeData: function ( products ) {
    return products.map(prod => {
      return {
        ...prod,
        price: Math.floor(Math.random() * prod.max_price),
        quantityAvailable: Math.floor(Math.random() * 50)
      }
   })
  }
}