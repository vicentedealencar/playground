//TODO
// bruteforce( /[a-z0-9]/g, 
//   function(possible){ 
//     post('fb.com', {login: 'mark', pass: possible}, 
//       function(worked){ return worked; }) 
//   }, 
//   function(pass){
//     console.log('marks pass: ' + pass);
//   });

var bruteforce = function(alphabet, evaluate, success) {
	var max = 8;
	var symbols = alphabet.split('');
	var timeouts = [];

	recurse('');

	function recurse (currentTry) {
		//console.log(timeouts.map(function(each) {return each._onTimeout.toString()}));
		console.log(currentTry);

		evaluate(currentTry, function(matches) {
			if (matches) {
				clearTimeouts();
				success(currentTry);
			}
		});

		if(currentTry.length >= max) {
			return;
		}

		symbols.forEach(function(symbol) {
			timeouts.push(setTimeout(function() {
					recurse(currentTry + symbol);
				}, 0));
		});
	}

	function clearTimeouts() {
		timeouts.forEach(function(each) {
			clearTimeout(each);
		});
	}
};

module.exports = bruteforce;