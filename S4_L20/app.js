function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

console.log(Person.__proto__);

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('john', 'doe');

console.log(john.firstname);
john.greet();

var jane = new Person('jane', 'doe');

console.log(jane.firstname);
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);