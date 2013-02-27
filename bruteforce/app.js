var bruteforce = require('./bruteforce');

bruteforce(
	'abc', 
	function(possible){ return possible == 'babaca'; }, 
	function(right) { console.log('RIGHT:', right); });
