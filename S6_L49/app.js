function greet(callback) {
    console.log('hello!');
    var data = {
        name:'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('callback invoked');
    console.log(data);
});

greet(function(data){
    console.log('another callback invoked');
    console.log(data.name);
});