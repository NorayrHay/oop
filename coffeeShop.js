'use strict'

function CoffeeShop(name, menu) {
  this.name = name
  this.menu = menu
  this.order = []
}

CoffeeShop.prototype.addOrder = function(orderName = '') {
  const item = this.menu.find((el) => el.name === orderName)
  if(item) {
    this.order.push(item)
  } else {
    return 'This item is currently unavailable!'
  }
}

CoffeeShop.prototype.fulfillOrder = function() {
  if(this.order.length > 0) {
    const item = this.order.shift()

    return `${item.name} is ready!`
  }

  return 'All orders are fulfilled!!!'
}

CoffeeShop.prototype.listOrders = function() {
  return this.order
}

CoffeeShop.prototype.dueAmount = function() {
  return this.order.reduce((acc, el) => {
    acc += el.price
    return acc
  }, 0)
}

CoffeeShop.prototype.cheapestItem = function() {
  const cheapest = this.menu.reduce((acc, el) => {
    if(acc.price >= el.price) {
      acc = el
    }

    return acc
  })

  return cheapest.name
}

CoffeeShop.prototype.drinksOnly = function() {
  return this.menu.filter((el) => el.type === 'drink')
}

CoffeeShop.prototype.foodsOnly = function() {
  return this.menu.filter((el) => el.type === 'food')
}

const restaurantMenu = [
  {name: 'Capuccino', type: 'drink', price: 700},
  {name: 'Americano', type: 'drink', price: 500},
  {name: 'Banana', type: 'food', price: 650},
  {name: 'Fresh', type: 'drink', price: 900},
  {name: 'Hot Dog', type: 'food', price: 250},
  {name: 'Ice cream', type: 'food', price: 250},
]

const restaurant = new CoffeeShop('Retaurant', restaurantMenu)

restaurant.addOrder('Banana')
restaurant.addOrder('Capuccino')

console.log(restaurant.cheapestItem())

console.log(restaurant.drinksOnly())

console.log(restaurant.foodsOnly())

console.log(restaurant)
console.log(restaurant.listOrders())
console.log(restaurant.dueAmount())
console.log(restaurant.fulfillOrder())
console.log(restaurant.dueAmount())
console.log(restaurant)
console.log(restaurant.fulfillOrder())
console.log(restaurant.dueAmount())
console.log(restaurant.fulfillOrder())
console.log(restaurant.listOrders())