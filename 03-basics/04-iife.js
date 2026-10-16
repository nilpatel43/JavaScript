//  Immediately Invoked Function Expressions

(function chai() {
    // chai = named IIFE hai
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )("nil");