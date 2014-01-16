var overloads = new Array();

module.exports.overload = function() {
	var argsKeys = Object.keys(arguments);
	var overload = {
		args: new Array(),
		func: null
	};
	
	for (var i = 0; i < argsKeys.length; i++) {
		if (typeof arguments[argsKeys[i]] === 'string') {
			overload.args.push(arguments[argsKeys[i]]);
		} else if (typeof arguments[argsKeys[i]] === 'function') {
			overload.func = arguments[argsKeys[i]];
		} else {
			throw new Error('wrong type');
		}		
	}
	
	overloads.push(overload);
};

module.exports.load = function() {
	var argsKeys = Object.keys(arguments);
	var argsValues = new Array();
	var argsTypes = new Array();
	
	for (var i = 0; i < argsKeys.length; i++) {
		argsTypes.push(typeof arguments[argsKeys[i]]);
		argsValues.push(arguments[argsKeys[i]]);
	}
	
	for (var i = 0; i < overloads.length; i++) {
		if (overloads[i].args.length === argsTypes.length) {
			var equal = true;
			for (var a = 0; a < overloads[i].args.length; a++) {
				if (overloads[i].args[a] != argsTypes[a]) {
					equal = false;
					break;
				}
			}
			if (equal) {
				return overloads[i].func.apply(this, argsValues);
			}
		}
	}
	
	throw new Error('no function found');
};
