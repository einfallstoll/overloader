# overloader

node.js function overloading

## install

    $ npm install overloader

## overloader gives you the ability to overload your functions

to start create an overloaded environment:

    var Overloader = require('overloader');
    
	var overloaded = new Overloader();
	
    overloaded.overload(function() {
        return 'no arguments';
    });
    
    overloaded.overload('number', function(num) {
    	return 'there was a number: ' + num;
    });
    
    overloaded.overload('string', 'number', function(name, num) {
    	return 'there was a number: ' + num + ' with the name ' + name;
    });

declare your function and pass `this` and `arguments` to the `.load()` function of your environment:

    function myFunction() {
    	return overloaded.load(this, arguments);
    }

now you can call your function as usual:

	console.log(myFunction());
	console.log(myFunction(5));
	console.log(myFunction('Fabio Poloni', 9));
	
the output will be:

    no arguments
	there was a number: 5
	there was a number: 9 with the name Fabio Poloni
