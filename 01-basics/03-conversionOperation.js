let score = "43abc";
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


let score1 = null;
// console.log(typeof score1);
// console.log(typeof (score1));

let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);

let score2 = undefined;
// console.log(typeof score2);
// console.log(typeof (score2));

let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);


// "33"  => 33
// "33abc"  => NaN
// null  => 0
// true => 1 , false => 0 
// "Nil"  => NaN



let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);

// console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "Nil";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);

// console.log(booleanIsLoggedIn2);


// 1  => true; 0  => false;
// ""  => false
// "Nil"  => false



let someNumber = 43;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);



// **************** Operations ****************

let value = 5;
let negValue = -value;
// console.log(negValue);

// console.log(3 + 3);
// console.log(3 - 3);
// console.log(3 * 3);
// console.log(2 ** 3);
// console.log(3 / 3);
// console.log(3 % 3);


let str1 = "Hello";
let str2 = " Nil";

let str3 = str1 + str2;

// console.log(str3);


// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(+true);


let gameCounter = 100;
gameCounter ++;  // ++ gameCounter
console.log(gameCounter);

let gameCounter1 = 100;
gameCounter1 --;  // -- gameCounter1
console.log(gameCounter1);
