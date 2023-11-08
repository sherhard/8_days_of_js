const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((county)=>console.log(county.toUpperCase()));
console.log('---------------------------------------------')
names.forEach((name)=>console.log(name))
console.log('---------------------------------------------')
numbers.forEach((numb)=>console.log(numb));

console.log('---------------------------------------------')

const countryToUpp=countries.map((countUpp)=>countUpp.toUpperCase())
console.log(countryToUpp)
