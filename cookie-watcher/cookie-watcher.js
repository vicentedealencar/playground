window.CW = new (function() {
	var self = this;
	var chached = null;

	self.get = function(varName) {
		return localStorage[varName];
	};

	self.set = function(varName, value) {
		self.chached = localStorage[varName] = value;
	};

	self.on = function(varName, doSomething) {
		setInterval(function() {
			var actualValue = self.get(varName);

			if(actualValue !== self.chached){
				self.set(varName, actualValue);

				doSomething(actualValue);
			}
		}, 500);
	};
});