// console.log('Hello World');
// Create an array with a list of fruits starting with 3 fruit

// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array

let fruit = ['kiwi','mango','apple']
fruit.push('avacoado')
console.log(fruit)

fruit.unshift('pear')
console.log(fruit)

fruit.pop()
console.log('this is regular display' , fruit)

console.log('this is spread display', ...fruit)

console.log(fruit.indexOf('mango'))
console.log(fruit.sort())

console.log(fruit.indexOf('Logan'))

const chickenEgg = ['🐔', '🥚'].sort()
console.log(`The ${chickenEgg[0]} came first`)