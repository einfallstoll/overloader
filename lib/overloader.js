var Overloader = (function() {
	
	function Overloader() {
		this.overloads = new Array();
	}
	
	Overloader.prototype.overload = function() {
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
		
		this.overloads.push(overload);
	};

	Overloader.prototype.load = function(caller, args) {
		var argsKeys = Object.keys(args);
		var argsValues = new Array();
		var argsTypes = new Array();
		
		for (var i = 0; i < argsKeys.length; i++) {
			argsTypes.push(typeof args[argsKeys[i]]);
			argsValues.push(args[argsKeys[i]]);
		}
		
		for (var i = 0; i < this.overloads.length; i++) {
			if (this.overloads[i].args.length === argsTypes.length) {
				var equal = true;
				for (var a = 0; a < this.overloads[i].args.length; a++) {
					if (this.overloads[i].args[a] != argsTypes[a]) {
						equal = false;
						break;
					}
				}
				if (equal) {
					return this.overloads[i].func.apply(caller, argsValues);
				}
			}
		}
		
		throw new Error('no function found');
	};
	
	return Overloader;
})();

module.exports = Overloader;


