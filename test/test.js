var Overloader = require('../lib/overloader');

var functionA = new Overloader();

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
	return functionA.load(this, arguments);
}

console.log(myFunction());
console.log(myFunction(5));
console.log(myFunction('Fabio Poloni', 9));

var functionB = new Overloader();

functionB.overload(function() {
	return 'no vvdvvarguments';
});

functionB.overload('number', function(num) {
	return 'there svdsvdsvwas a number: ' + num;
});

functionB.overload('string', 'boolean', function(name, num) {
	return 'there was a vsvdsvdvsvdnumber: ' + num + ' wisdvsdsvsvth the name ' + name;
});

function functions() {
	return functionB.load(this, arguments);
}

console.log(functions());
console.log(functions(5));
console.log(functions('Fabio Poloni', true));
