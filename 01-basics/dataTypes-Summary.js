//  Primitive 

//  7 type : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 15698532697563249659n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Nil",
    age: 22
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non primitive)

let myYoutubename = "nilsanghani";

let anothername = myYoutubename;
anothername = "mycode";

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "nil@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sanghani@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

