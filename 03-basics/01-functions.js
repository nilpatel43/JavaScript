function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("L");   
}

// sayMyName();


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result =  addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} jast logged in`
}

// console.log(loginUserMessage("nil"));
console.log(loginUserMessage());
