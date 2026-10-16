// const userEmail = ""
const userEmail = []
// const userEmail = "n@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


    //  falsy values
    //    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    // truthy value
    //    "0", 'false', " ", [], {}, function() {},


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}



//  Nullish Coalescing Operator (??): null undefined

//  ?? ==> (Nullish Coalescing) If the value is null or undefined, returns the default value.
//  ?? ==> (Nullish Coalescing) Returns the right-hand value if the left-hand value is null or undefined 
            //  (જો Left-hand value null અથવા undefined હોય, તો Right-hand value મળે છે.)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 16 ?? 14

console.log(val1);



//  Terniary Operator
//    condition ? true : false

//  ?: ==> (Ternary Operator) Checks a condition and returns a value if true, otherwise returns another value.

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

