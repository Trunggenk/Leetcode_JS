/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};
//createHelloWorld() is function and returns a function that returns "Hello World"
const f = createHelloWorld();
console.log(f()); // "Hello World"