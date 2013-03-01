var bruteforce = require('./bruteforce');

bruteforce(
	'abc',
	function(possible, done){
		setTimeout(function() {
			done(possible == 'babaca');
		}, 1000);
	},
	function(right) { console.log('RIGHT:', right); });
