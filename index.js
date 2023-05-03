const coffeeMenu = require('./coffee_data');

const coffeeNames = coffeeMenu.map(coffee => coffee.name);

console.log(coffeeNames)

const cheapDrinks = coffeeMenu.filter(coffee => coffee.price <= 5);

console.log(cheapDrinks);

const evenPricedDrinks = coffeeMenu.filter(coffee => coffee.price % 2 === 0);

console.log(evenPricedDrinks);

let totalPrice = 0;

for (let i = 0; i < coffeeMenu.length; i++) {
  totalPrice += coffeeMenu[i].price;
}

console.log(totalPrice);

const seasonalDrinks = coffeeMenu.filter(coffee => coffee.seasonal === true);

console.log(seasonalDrinks);

for (let i = 0; i < seasonalDrinks.length; i++) {
  seasonalDrinks[i].name += ' with imported beans';
}

console.log(seasonalDrinks);