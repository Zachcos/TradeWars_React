module.exports = {
  // Randomize price data before loading app
  randomizeData: function ( products ) {
    products.map(prod => {
      return {
        ...prod,
        price: Math.floor(Math.random() * prod.max_price),
        quantityAvailable: Math.floor(Math.random() * 50)
      }
   })
  }
}