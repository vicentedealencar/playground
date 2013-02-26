//TODO
// bruteforce( /[a-z0-9]/g, 
//   function(possible){ 
//     post('fb.com', {login: 'mark', pass: possible}, 
//       function(worked){ return worked; }) 
//   }, 
//   function(pass){
//     console.log('marks pass: ' + pass);
//   });

var bruteforce = function(alphabet, test) {
	var max = 8;
	var letters = alphabet.split('');

	return recurse('');

	function recurse (currentTry) {
		console.log(currentTry);

		if(test(currentTry)) {
			return currentTry;
		}

		if(currentTry.length >= max) {
			return null;
		}

		for (var i = letters.length - 1; i >= 0; i--) {
			var result = recurse(currentTry + letters[i]);
			if(result) {
				return result;
			}
		};

		return null;
	}

};

module.exports = bruteforce;