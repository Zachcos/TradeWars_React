module.exports = {
  // Randomize price data before loading app
  setPrices: function ( products ) {
    products.map(prod => {
      prod.price = Math.floor(Math.random() * prod.max_price)
    })
    return products
  }
}