const name = "Nil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameNmae = new String("Sanghani-nil-hii");

// console.log(gameNmae[0]);
// console.log(gameNmae.__proto__);

// console.log(gameNmae.length);
// console.log(gameNmae.toUpperCase());
// console.log(gameNmae.charAt(2));
// console.log(gameNmae.indexOf('n'));

const newString = gameNmae.substring(0, 3);
console.log(newString);

const anotherString = gameNmae.slice(-6);
console.log(anotherString);

const newStringOne = "    Nil    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nil.com/nil%20sanghani";
console.log(url.replace('%20', '-'));

console.log(url.includes('nil'));

console.log(gameNmae.split('-'));
