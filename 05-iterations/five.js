//   forEach Loop


// Array in forEach loop

const coding = ["js", "ruby", "java", "python", "c++"]

coding.forEach( function (val) {
    // console.log(val);
})


// Arrow Function in forEach Loop

coding.forEach ( (item) => {
    // console.log(item);
})


// Function in forEach loop

function printMe (item) {
    // console.log(item);
}
coding.forEach(printMe)


// item, index, arr All Find

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


//  Array inside Object in forEach Loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.languageName);
})

