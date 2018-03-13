module.exports = {
  // Randomize price data before loading app
  randomizeData: function ( products ) {
    products.map(prod => {
      prod.price = Math.floor(Math.random() * prod.max_price)
      prod.quantityAvailable = Math.floor(Math.random() * 50)
    })
    return products
  }
}