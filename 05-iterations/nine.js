
//  Reduce()

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


//  Arrow Function in Reduce()

const myTotal = myNums.reduce ( (acc, curr) => acc + curr, 2 )

console.log(myTotal);


//  Object in Reduce()

