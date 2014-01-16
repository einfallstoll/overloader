var functionA = require('../lib/overloader');

functionA.overload(function() {
	return 'no arguments';
});

functionA.overload('number', function(num) {
	return 'there was a number: ' + num;
});

functionA.overload('string', 'number', function(name, num) {
	return 'there was a number: ' + num + ' with the name ' + name;
});

function myFunction() {
	return functionA.load.apply(this, arguments);
}

console.log(myFunction());
console.log(myFunction(5));
console.log(myFunction('Fabio Poloni', 9));
