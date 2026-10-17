
//  For...of Loop

// ["", "", ""]
// [{} ,{}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//  Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of Amerika")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

//  Map in For...of Loop

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//  Object in For...of Loop

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }   
//    ==>   Error Avase Iterable Nathi 
//    ==>   For...in Loop ma thase Object

