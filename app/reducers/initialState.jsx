export default {
  products: [
    {
      name: 'CPU',
      price: 100,
      quantityAvailable: 4,
      id: 1,
      min_price: 50,
      max_price: 100
    },
    {
      name: 'GPU',
      price: 200,
      quantityAvailable: 4,
      id: 2,
      min_price: 50,
      max_price: 200
    },
    {
      name: 'HHD',
      price: 300,
      quantityAvailable: 4,
      id: 3,
      min_price: 50,
      max_price: 300
    }
  ],
  currentPlayer: {
    name: "Dirk Spently",
    funds: 2000,
    health: 100,
    att: 10,
    def: 10,
    stash: []
  },
  gameData: {
    currentCity: 'Silicon Valley',
    daysRemaining: 30
  }
}