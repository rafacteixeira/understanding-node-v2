//function statement
function greet() {
    console.log('hi');
}
greet();

//functions are first-class
function logGreet(fn) {
    fn();
}
logGreet(greet);

//function expressions
var greetMe = function() {
    console.log('Hi Rafael!');
}

greetMe();

//itś first class

logGreet(greetMe);


logGreet(function() {
    console.log('Hi Rafael. Function on The Fly');
});


(function() {
    console.log('Hi Rafael. IIFE');
}());