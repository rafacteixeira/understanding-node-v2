function Greetr() {
    this.greeting = 'Hello World from Greet4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;