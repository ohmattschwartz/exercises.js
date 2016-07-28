/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/
let dwarfs = ['Bashful', 'Doc', 'Dopey', 'Happy', 'Sleepy', 'Sneezy', 'Grumpy']

let phonenumber = [5, 5, 1, 2, 6, 5, 2, 7, 4, 6]

let ygritestring = 'You know nothing, Jon Snow.'

// .sort()
console.log('Sorted:', dwarfs.sort())
// .concat()
let phoneDwarfs = dwarfs.concat(phonenumber)
console.log(phoneDwarfs)
// .indexOf()
console.log(dwarfs.indexOf('Doc'))
// .split() (on Strings)
console.log(ygritestring.split(' '))
// .join()
console.log(dwarfs.join(' + '))
// .pop()
let popped = dwarfs.pop()
console.log(popped)
// .push()
let bonusDwarfs = dwarfs.push('Gassy', 'Monica')
console.log(bonusDwarfs)
// .slice()
let ygrite2 = ygritestring.slice(4, -6)
console.log(ygrite2)
// .splice()
let removed = dwarfs.splice(3, 1, 'Susan Sarandon')
console.log(dwarfs, removed)
// .shift()
console.log('dwarfs before: ' + dwarfs)
var shifted = dwarfs.shift()
console.log('dwarfs after: ' + dwarfs)
console.log('Removed this element: ' + shifted)
// .unshift()
console.log(phonenumber.unshift(-2, -1))
// .filter()
function isBigEnough (value) {
  return value >= 5
}
let filtered = phonenumber.filter(isBigEnough)
console.log(filtered)
// .map()
console.log(phonenumber.map(Math.sqrt))
