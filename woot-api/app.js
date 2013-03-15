var jsdom = require("jsdom");

var woot = function(subdomain, callback, errorCallback){
	var onError = errorCallback || function(){};

	if (arguments.length == 1) {
		callback = arguments[0];
		subdomain = 'www';
	}
	
	jsdom.env(
		'http://' + subdomain + '.woot.com',
		['http://code.jquery.com/jquery.js'],
		function (errors, window) {
			if (errors) {
				onError(errors);
			}

			callback({
				deal: window.$('#todays-deal .fn').text().trim(),
				price: window.$('#todays-deal .price').text().trim(),
				link: window.$('#todays-deal .wantone').attr('href'),
				photo: window.$('#todays-deal .photo').attr('src')
			});
		}
	);

};

module.exports = woot;

// woot('tech', function (ret) {
// 	console.log('TECH');
// 	console.log("deal: \t", ret.deal);
// 	console.log("price: \t", ret.price);
// 	console.log("link: \t", ret.link);
// 	console.log("photo: \t", ret.photo);
// });

// woot(function (ret) {
// 	console.log('DEFAULT');
// 	console.log("deal: \t", ret.deal);
// 	console.log("price: \t", ret.price);
// 	console.log("link: \t", ret.link);
// 	console.log("photo: \t", ret.photo);
// });
