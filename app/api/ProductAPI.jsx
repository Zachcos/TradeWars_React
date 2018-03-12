module.exports = {
  // Randomize price data before loading app
  setPrices: function ( products ) {
    var newProducts = products;
    newProducts.map(prod => {
      console.log(prod.name)
    })
  }
}