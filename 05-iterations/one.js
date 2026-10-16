//  for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


//  Simple Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}


//  Condition in Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");  
    }
    // console.log(element);
}


//  Loop inside a Loop

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`);    
        // console.log(i + '*' + j + ' = ' + i*j);
    }    
}


//  Array in Loop

let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}



//   Break and Continue


//  Break in Loop

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break   // Loop Stop
//     }
//     console.log(`Value of i is ${i}`);
    
// }


//  Continue in Loop

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue   // Loop Continue
    }
    console.log(`Value of i is ${i}`);
    
}
